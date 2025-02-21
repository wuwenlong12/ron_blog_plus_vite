import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import styles from './Editor.module.scss';
import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import {
  defaultBlockSpecs,
  PartialBlock,
  locales,
  BlockNoteSchema,
  insertOrUpdateBlock,
  filterSuggestionItems,
} from '@blocknote/core';
import { downloadMarkdown } from '../../utils/downloadMarkdown';
import TreeDoc from './TreeDoc/TreeDoc';
import { uploadFileInChunks } from '../../utils/uploadFileInChunks';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Alert } from '../CustomBlocks/Alert';
import { RiAlertFill } from 'react-icons/ri';
async function uploadFile(file: File) {
  const res = await uploadFileInChunks(file);
  return res as string;
}

interface EditorProps {
  initialContent?: PartialBlock[] | undefined;
  editable: boolean;
  isSummary?: boolean;
  onChange?: (document: unknown) => void;
}

export interface EditorRef {
  blocksToMarkdown: (name: string) => Promise<void>;
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
  },
});

// Slash menu item to insert an Alert block
const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: '提示',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'alert',
    });
  },
  aliases: [
    'alert',
    'notification',
    'emphasize',
    'warning',
    'error',
    'info',
    'success',
  ],
  group: 'Other',
  icon: <RiAlertFill />,
});

const Editor = forwardRef<EditorRef, EditorProps>(
  (
    {
      initialContent = [
        {
          id: 'b7e79971-43cb-42d7-886c-5598f5c911fa',
          type: 'paragraph',
          props: {
            textColor: 'default',
            backgroundColor: 'default',
            textAlignment: 'left',
          },
          content: [
            {
              type: 'text',
              text: '快开始分享你的知识吧～',
              styles: {
                italic: true,
                underline: true,
              },
            },
          ],
          children: [],
        },
      ],
      editable = false,
      onChange,
      isSummary = false,
    },
    ref
  ) => {
    const { isDarkMode } = useSelector((state: RootState) => state.theme); // 获取当前主题状态
    const [markdownFromBlocks, setMarkdownFromBlocks] = useState<
      string | undefined
    >(undefined);
    const editor = useCreateBlockNote({
      schema,
      dictionary: locales.zh,
      initialContent,
      uploadFile,
    });

    useEffect(() => {
      init();
    }, []);

    const init = async () => {
      const markdownFromBlocks = await editor.blocksToMarkdownLossy(
        editor.document
      );

      setMarkdownFromBlocks(markdownFromBlocks);
    };

    const blocksToMarkdown = async (name: string) => {
      if (!markdownFromBlocks) return;
      downloadMarkdown(markdownFromBlocks, name);
    };

    // 使用 useImperativeHandle 来暴露 blocksToMarkdown 方法
    useImperativeHandle(ref, () => ({
      blocksToMarkdown,
    }));

    return (
      <div className={styles.container}>
        {isSummary ? null : (
          <div
            className={styles.contentInPage}
            style={
              isDarkMode
                ? { backgroundColor: '#373737' }
                : { backgroundColor: '#fff' }
            }
          >
            <TreeDoc
              blocks={editor.document as unknown as PartialBlock[]}
            ></TreeDoc>
          </div>
        )}

        <BlockNoteView
          editor={editor}
          style={editable ? {} : { marginLeft: -50, marginRight: -50 }}
          editable={editable}
          onChange={() => onChange && onChange(editor.document)}
          theme={isDarkMode ? 'dark' : 'light'}
          formattingToolbar
          linkToolbar
          sideMenu
          // slashMenu
          emojiPicker
          filePanel
          tableHandles
          slashMenu={false}
        >
          <SuggestionMenuController
            triggerCharacter={'/'}
            getItems={async query =>
              filterSuggestionItems(
                [...getDefaultReactSlashMenuItems(editor), insertAlert(editor)],
                query
              )
            }
          />
        </BlockNoteView>
      </div>
    );
  }
);

Editor.displayName = 'Editor';

export default Editor;
