import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
const paths = [
  `M1103 1230q4 1 6 4.5t2 7.5q0 1 -1 2l-24 62q-17 45 -35 90q-29 76 -71 148q-20 37 -56 69q-19 16 -45 24q-22 6 -46 8h-9q-45 0 -87 -17q-45 -20 -79 -52q-67 -64 -105 -142q-38 -77 -58 -158q-16 -68 -28 -136q-2 -13 -5 -26q-7 -40 -16 -79v-2q-7 -40 -27 -72v-1
q-1 -2 -1 -5q0 -1 0.5 -4t2.5 -5q3 -2 9 -3q3 -1 5 -1q3 0 4 1q3 1 6.5 4t3.5 7q0 2 -1 3q-1 3 -1 6q0 4 1.5 9.5t5.5 13.5q9 15 22 27q26 25 59 40q62 29 127 29h8q70 -4 116 -47q41 -43 59 -107q32 -91 32 -179q0 -42 -7 -83q-27 -128 -122 -216q-46 -43 -105 -71
q-58 -28 -123 -41q-45 -10 -92 -10q-21 0 -41 2q-47 5 -92 22q9 46 16 92q14 91 24 183q17 157 19 315q-1 -5 -3.5 -7t-4.5 -2.5t-3 -0.5q-5 0 -8 3.5t-4 17.5t-2 43q0 4 3 7t7 3v1q4 0 7 -3t3 -7q2 -38 3 -46l2 -4v48q0 93 -8 186q-7 93 -26 187q-17 93 -65 187
q-26 49 -85 79q-11 5 -24 7q-4 0 -8 1h-25q-4 0 -8 -1q-15 -4 -28 -9q-13 -8 -23 -16q-7 -6 -8 -14v-3q0 -7 5 -13t13 -7l5 -1q11 -2 20 -2l17 -4q14 -6 23 -15q19 -19 37 -53q33 -70 47 -157q23 -149 23 -303q0 -24 -1 -48q-1 -179 -19 -357q-8 -90 -19 -179q-2 -15 -4 -29
l-2 -14q-24 22 -45 47q-45 57 -73 125q-52 132 -52 274v11q0 4 -3 7t-7 3q-5 0 -8 -2.5t-3 -7.5v-1q11 -149 62 -289q27 -69 70 -130q25 -34 55 -64l-12 -80q-2 -14 -4 -27v-7q0 -19 11.5 -35t34.5 -20q4 -1 9 -1q16 0 31 11t20 32q4 16 7 31q1 8 3 16q108 -70 242 -72
q83 1 161 33q77 31 141 87t103 131q40 76 50 159q3 34 3 68q0 130 -52 247q-30 79 -105 131q-61 35 -123 35q-20 0 -39 -3q-79 -13 -143 -56q-29 -18 -54 -42q15 37 32 74q34 74 70 145l6 12q32 66 64 128q35 69 80 123q46 56 111 68q11 1 23 1h11q14 0 30 -7q31 -15 58 -45
q26 -30 46 -65q21 -34 38 -71q33 -74 51 -153q1 -4 4 -7q2 -1 5 -1h3zM959 778q0 2 1.5 5.5t5.5 4.5h3q6 0 9 -7q2 -2 6 -29q2 -11 2 -25q0 -22 -4 -50q0 -4 -3.5 -6.5t-7.5 -2.5q-4 1 -6.5 4.5t-2.5 7.5q3 27 3 47q0 12 -2.5 29.5t-3.5 18.5v3zM305 548q-5 0 -7 4
q-2 2 -2 5v2q20 262 20 264q0 4 3 7t7 3q5 0 7.5 -3t2.5 -7q0 -2 -20 -266q-1 -5 -4 -7q-2 -2 -5 -2h-2zM296 1350q-21 98 -50 154t-52 80q-22 23 -25 23q-3 3 -4 7v2q0 3 2 5q3 5 8 5q3 0 6 -2q3 0 27.5 -25t55 -84t52.5 -161v-2q0 -3 -2 -6t-6 -4q-4 0 -7.5 2t-4.5 6z
M724 329q53 20 88.5 51.5t56 63t29.5 53.5t9 23q3 7 10 7h3q4 -1 6 -5q1 -2 1 -5v-3q0 -5 -17.5 -43t-60.5 -84.5t-118 -76.5q-2 -1 -4 -1t-5 1.5t-4 5.5q-1 2 -1 4q0 1 1.5 4t5.5 5zM712 1580q2 -2 2 -5v-3.5t-3 -5.5q-56 -50 -87 -98.5t-43 -80t-12 -33.5q-1 -4 -4 -6
t-6 -2h-2q-4 2 -6 5q-1 2 -1 5v3q0 3 12.5 36.5t44.5 83.5t91 102q3 3 6 3q4 0 8 -4z`,
  `M1035 1176q2 4 1.5 8t-4.5 7q-73 46 -156 66q-31 7 -61 7q-40 0 -79 -12q-70 131 -171 241q-58 64 -136 107q-40 22 -86 31q-22 5 -45 5q-25 0 -51 -6q-50 -14 -89 -47q-38 -33 -62 -74q-46 -83 -62 -171q-21 -110 -21 -219q0 -64 7 -128q18 -173 79 -337q32 -82 77 -157
q46 -76 111 -138q66 -64 160 -89q23 -5 46 -5q20 0 40 4q20 -19 44 -34q45 -26 95 -28h6q47 0 86 14q43 14 79 41q70 58 89 145q14 66 14 132q0 19 -1 37q-11 168 -63 329q-49 160 -126 310q-6 11 -13 23q0 1 -1 3q36 12 72 12q29 0 59 -8q41 -9 77 -28q37 -18 70 -43h1
q3 -2 7 -1.5t7 3.5zM494 350q-2 -1 -4 -1t-4.5 0.5t-5.5 3.5q-2 3 -16.5 36t-25.5 91q-8 40 -8 89q0 23 2 47q1 4 4 7t6 3h1q5 -1 7.5 -4t2.5 -8q-2 -26 -2 -51q0 -44 9 -90t22.5 -77t15.5 -32q1 -3 1 -5t-0.5 -4.5t-4.5 -4.5zM212 462q-1 2 -1 4t1 5t5 5q2 1 4 1q6 0 9 -6
q37 -65 87.5 -104t89.5 -56.5t41 -17.5q5 -1 6 -5q1 -2 1 -5v-3q-1 -4 -5 -6q-1 -1 -3 -1t-5 1q-5 0 -46 18t-93 59.5t-91 110.5zM136 615v3q0 2 1 5t5 5h4q6 0 9 -7q12 -36 15 -43q3 -2 4 -7l1 -5q0 -2 -1.5 -4t-3.5 -3.5t-3 -1.5q-2 -1 -4 -1q-3 0 -6 2.5t-7.5 15.5
t-13.5 41zM181 1570q3 -2 3.5 -6.5t-2.5 -7.5q-47 -58 -70.5 -110t-30.5 -86q-6 -29 -6 -34v-1q-1 -4 -4 -6.5t-7 -2.5q-5 1 -7.5 4t-2.5 7t7 39t31.5 89t74.5 114q3 4 8 4q3 0 6 -3zM539 1468q101 -100 174 -224q-1 -1 -2 -1q-1 -1 -2 -1q-79 -38 -130 -109
q-51 -69 -83 -149q-66 -160 -74 -335q-1 -17 -1 -34q0 -71 14 -142q15 -76 54 -148q-14 2 -27 6q-69 22 -123 81q-105 118 -153 273q-24 76 -37 156q-14 79 -20 160q-5 61 -5 122q0 99 14 196q12 78 41 145q29 70 89 101q29 13 63 13h5q37 -2 73 -18q72 -33 130 -92z
M720 1232l16 -28q81 -145 133 -304q25 -79 42 -160q18 -82 20 -165q1 -14 1 -28q0 -68 -17 -135q-20 -83 -85 -132q-33 -22 -73 -25q-9 -1 -18 -1q-30 0 -56 10q-38 16 -62 45q1 1 3 2l3 3q70 62 103 143q34 79 51 162v3q0 2 -1.5 5t-6.5 4h-3q-2 0 -4.5 -1.5t-3.5 -5.5
q-26 -79 -65 -151q-39 -73 -100 -119l-4 -2q-1 -1 -2 -1q-1 1 -1 2q-2 2 -3 4q-18 31 -32 65q-14 35 -24 73q-10 37 -16 77q-6 39 -9 78q-4 45 -4 91q0 116 29 231q21 80 65 149q45 71 118 109q2 1 3 1q2 1 3 1z"
`,
  `M1157 1158q8 3 12 10q3 5 3 10q0 2 -1 5q0 2 -1 3q-44 117 -104 226q-30 55 -69 105q-38 51 -93 89q-56 37 -132 43q-19 0 -37 -2q-11 -2 -23 -8t-21 -14q-38 -38 -43 -78q-7 -40 -7 -77q0 -32 5 -61q8 -65 23 -126q28 -123 64 -241q20 -68 40 -135q16 -50 31 -99
q2 -10 5 -20q33 -107 55 -212q11 -58 11 -110q-1 -26 -5 -43q-1 -1 -1 -3q-2 -6 -4.5 -9.5t-8.5 -7.5l8 1q-18 -4 -37 -4q-17 0 -34 3q-37 8 -70 30q-67 45 -117 110q-51 64 -93 135q-38 66 -73 134q-3 5 -6 11q-76 147 -138 301q-26 62 -49 125q-6 15 -11 29q-15 39 -28 79
l-13 40l-6 21q0 1 -1 2q-1 5 -3 10l-3 6l-2.5 5t-4.5 5q-2 3 -6 5l-2 1q0 1 -1 1l-7.5 2.5t-12.5 1.5q-8 -1 -15 -5q-3 -2 -5.5 -4t-4.5 -4q-5 -7 -6.5 -11t-2.5 -7q0 -2 -1 -3q-2 -13 -3 -21v-1q0 -18 1 -33q2 -32 6 -62q8 -61 18 -120q16 -90 35 -179q5 -28 11 -57
l94 -465q2 -9 4 -19q4 -21 6 -37q1 -9 1 -20q0 -22 -4 -57t-16 -60q-8 -15 -29 -27q-17 -10 -36 -10q-5 0 -10 1q-49 10 -85 59q-33 47 -51 104q-18 56 -27 115q-10 73 -10 146q0 46 4 92v2q0 3 -2.5 5.5t-6.5 3.5q-4 0 -7 -2.5t-4 -6.5v-1q1 -121 15 -240q10 -121 67 -233
q28 -58 94 -90q22 -9 45 -9q15 0 30 4q39 11 67 37q27 26 43 59q8 16 14 33q3 9 5 17q1 3 2 7q2 7 3 13q4 21 4 40q0 9 -1 18q0 5 -1 11q-1 32 -5 62q-16 122 -45 239q-27 111 -55 222q-2 5 -3 10l-59 231l-2 8q-1 4 -2 7l45 -110q62 -155 137 -305t181 -283
q52 -66 120 -121q34 -28 76 -48q42 -22 93 -26l7 1q24 3 46 19q21 15 32 36q21 40 23 77q1 19 1 37q0 51 -8 97q-21 127 -56 246q-34 120 -71 236q-37 117 -68 233q-16 58 -26 116q-7 41 -7 78q0 14 1 28q2 23 8 32q0 1 1 1q1 2 2.5 3.5t5.5 3.5q11 7 22 12q20 8 42 8h9
q27 -3 52 -18q50 -28 89 -75q38 -46 68 -99q60 -107 90 -224l1 -1q2 -8 9 -12q5 -4 11 -4q2 0 5 1zM954 657q3 -3 3 -7q0 -6 -2 -8.5t-4.5 -3.5t-3.5 -1h-2q-4 0 -6.5 3.5t-5 17t-6.5 41.5v2q0 4 2 6.5t7 3.5h1q4 0 6.5 -2.5t3.5 -6.5q6 -37 7 -45zM877 339q-1 3 -1 5
t0.5 4.5t4.5 4.5q35 23 49 60.5t15 76.5v15q0 30 -3.5 55t-4.5 27v2q0 3 2 6t6 4h2q4 0 6.5 -2t3.5 -6q2 -4 6 -34q3 -20 3 -45q0 -13 -1.5 -41.5t-17.5 -69t-56 -65.5q-2 -1 -4 -1t-4.5 0.5t-5.5 3.5zM343 637q3 -3 3 -7q0 -6 -2 -9t-4.5 -3.5t-3.5 -0.5h-2q-4 0 -6.5 3
t-5 16.5t-6.5 42.5v2q0 3 2 6t6 4h2q4 0 6.5 -2.5t3.5 -6.5q5 -38 7 -45zM276 247q47 38 65 85t18.5 90.5t-5.5 72t-7 30.5v4q0 1 1 4t5 4q2 1 3 1q7 0 10 -7q1 -2 7.5 -32.5t6 -77.5t-20 -97.5t-71.5 -92.5q-2 -2 -5 -2h-3.5t-5.5 4q-2 2 -2 5v3.5t4 5.5zM183 1142v-3
q0 -2 -1.5 -5t-5.5 -5h-3q-2 0 -5 1.5t-5 5.5q-3 6 -21.5 83t-25.5 190q0 4 2.5 7t7.5 3q4 0 7 -2.5t3 -6.5q7 -112 25.5 -188t21.5 -80zM703 1208h-2q-4 0 -6.5 3t-5 16.5t-6.5 42.5v3q0 2 2 5t6 3q1 1 2 1q3 0 6 -2.5t4 -6.5q5 -38 7 -45q3 -3 3 -8t-2 -8t-4.5 -3.5
t-3.5 -0.5zM750 1639q1 -2 1 -4t-1 -5t-5 -5q-40 -17 -55 -55q-13 -35 -13 -74q0 -3 0.5 -25.5t7 -52.5t7.5 -32v-3q0 -2 -1.5 -5t-5.5 -4q-2 -1 -4 -1q-1 0 -4 1.5t-4 5.5q-2 5 -9 38t-7.5 78.5t17 86.5t63.5 61q2 1 4 1q6 0 9 -6z"
 `,
  `M4 288q6 -11 21 -14q6 -1 12 -1q9 0 22.5 3t22.5 12q14 16 17 43q1 9 1 17q0 16 -6.5 34.5t-27.5 20.5q-10 0 -11 -9q-1 -5 -1 -10q0 -6 1 -12l1 -9q0 -5 -0.5 -11.5t-3.5 -12.5t-10 -11.5t-15 -9.5q-12 -7 -19 -14q-5 -5 -5 -10q0 -3 1 -6z"
  `,
  `M1131 1169q4 1 7 3.5t3 7.5q0 4 -3 7t-7 3h-1q-19 -1 -37 -1q-47 0 -94 4q-4 61 -15 119q-15 80 -52 156q-37 77 -106 135q-70 61 -165 63q-94 -4 -159 -67q-32 -31 -43 -74q-4 -19 -4 -37q0 -23 7 -46q27 -78 88 -128q62 -49 134 -76q71 -26 146 -40q25 -5 51 -9h3
q2 -23 2 -45q0 -65 -17 -124q-18 -62 -60 -107q-43 -45 -105 -66q-27 -10 -57 -14q-43 36 -101 48q-15 3 -29 3q-51 0 -91 -34l-4 -4q-5 -5 -5.5 -11.5t3.5 -11.5q9 -27 28 -43q18 -17 38 -27q40 -20 83 -24q19 -2 38 -2h12q33 -57 43 -123q6 -39 6 -77v-11q-2 -44 -16 -83
q-31 -77 -119 -108q-55 -18 -114 -18q-35 0 -72 6q-14 3 -27 6q48 152 64 310q11 109 11 217q0 99 -9 197q-10 103 -31 205q-19 102 -57 201q-19 50 -48 98q-15 24 -35 46q-20 23 -52 39q-17 8 -38 8q-20 0 -37 -9q-32 -18 -47 -43q-30 -48 -41 -99q0 -4 2 -7.5t6 -4.5
q2 -1 3 -1q5 0 8 5q27 44 59 76q17 16 32 19h6q3 0 6.5 -1t9.5 -5q25 -20 45 -64q18 -42 32 -88q52 -186 62 -384q5 -78 5 -155q0 -119 -12 -238q-14 -145 -51 -284q-25 13 -48 29q-41 29 -70 70t-35 92v12q0 44 19 84q23 46 61 80q3 4 3 8t-3 7t-7 3t-8 -3v-1
q-35 -40 -58 -88q-11 -24 -17 -50q-4 -22 -4 -44v-9q13 -112 100 -184q27 -23 56 -42q-8 -30 -18 -59q-3 -10 -3 -19q0 -11 7 -26.5t29 -23.5q9 -3 18 -3q11 0 25.5 6.5t23.5 26.5q10 23 19 47q15 -6 31 -11q66 -22 136 -22q42 0 86 8q58 13 110 49q51 39 80 97
q27 57 32 116q2 21 2 42q0 38 -8 76q-6 29 -17 57q-11 27 -25 53q-2 3 -3 5t-2 3q2 1 5 2l8 2q84 26 149 89q64 66 90 150q24 81 24 161q0 14 -1 28q65 -5 131 -6zM264 1510q4 -9 28.5 -75t49 -155.5t24.5 -160.5q0 -5 -3 -8t-7 -3t-7 3t-3 8q0 69 -25 158.5t-49.5 154.5
t-26.5 70q-1 2 -1 4q0 1 1 4t5 5q2 1 4 1q6 0 10 -6zM382 1002q2 -3 2 -7q-1 -5 -3 -8t-4.5 -3.5t-3.5 -0.5q-4 0 -6.5 1.5t-3.5 7.5t-2 19t-2 36q0 4 3 7t7 4q5 0 7.5 -3t3.5 -7q1 -39 2 -46zM384 690q-1 -6 -3 -8.5t-4.5 -3t-3.5 -0.5q-4 0 -6.5 1t-3.5 7t-2 19t-2 36
q0 5 3 8t7 3q5 0 7.5 -3t3.5 -7q1 -38 2 -46q2 -2 2 -6zM374 655q0 -5 -2.5 -41.5t-9.5 -87t-21.5 -97t-38.5 -71.5q-3 -3 -7 -3t-7 3t-3 7t3 7q21 23 34.5 68t20 94.5t9 84t2.5 36.5q0 5 3 7.5t7 2.5h1q4 0 6.5 -3t2.5 -7zM598 293q50 16 80 47.5t45 66t19.5 59.5t4.5 27
q0 4 3 6.5t7 2.5h1q4 0 7 -4q2 -2 2 -5v-3q0 -5 -5 -30t-21.5 -62.5t-49.5 -72t-88 -51.5q-2 -1 -4 -1q-1 0 -4 1.5t-4 6.5v3q0 2 1.5 5t5.5 4zM591 1588h12q25 0 50 -7q58 -17 105 -58q88 -92 112 -234q8 -42 12 -83q-24 3 -49 9q-73 15 -142 42q-35 13 -66 32
q-33 18 -60 42q-56 50 -74 119q-3 15 -3 28q0 53 43 88q27 19 60 22zM889 1488v-3q0 -2 -1 -5t-5 -5h-3q-2 0 -5.5 1t-4.5 5q-19 49 -53.5 79.5t-71.5 46.5t-63 21q-22 5 -27 5h-1q-4 1 -6.5 4t-2.5 8q1 4 4 6.5t6 2.5h2q3 0 31.5 -6t68 -23t76 -50t56.5 -87zM937 979
q3 7 10 7h3q4 -2 6 -5q1 -3 1 -5v-3q-1 -4 -11.5 -31t-33.5 -62.5t-61.5 -66.5t-94.5 -42h-2q-4 0 -6.5 2t-3.5 6v3q0 2 2 5t6 4q52 10 87.5 39.5t57 63t31 58.5t9.5 27zM961 1342q2 -1 9 -28t8 -74q-1 -5 -4 -8q-2 -2 -5 -2h-2q-4 0 -7 3t-3 7q0 44 -6.5 68.5t-7.5 25.5
q-1 3 -1 5t1 4.5t5 3.5q2 1 4 1q6 0 9 -6z"
`,
  `M865 1436q4 2 4 6v3q0 2 -1 5l-1 1q-31 39 -72 67q-42 27 -89 43q-95 30 -194 33q-36 1 -71 1q-62 0 -124 -4q-51 -2 -103 -2h-21q-9 11 -19 22q-11 12 -32 24q-10 6 -27 10q-6 1 -12 1q-13 0 -26 -4q-9 -4 -16 -8q-3 -2 -5 -4q-1 0 -1 -1l-3 -2l-2 -1l-10 -10
q-10 -8 -23 -24q0 -1 -1 -2q-3 -4 -6.5 -10t-6.5 -16q-2 -6 -2.5 -16.5t4.5 -23.5q6 -12 14 -19t14 -10q9 -4 15.5 -5.5t10.5 -1.5q2 0 4 -1h18q24 2 44 6q1 1 2 1l14 -26q19 -40 36 -84q68 -176 117 -361q51 -184 88 -370q19 -93 26 -184q2 -23 2 -44q-1 -22 -4 -37v-6
q-1 -2 -1 -3l-2 -6q-3 -8 -7 -15l-1 -1q-9 -17 -20 -30q-25 -28 -61 -38q-12 -3 -25 -3q-25 0 -52 12q-80 41 -114 136q-34 89 -38 186q-1 24 -1 48q0 73 11 144v2q0 3 -2 6t-6 4q-5 0 -8 -2t-4 -7v-1q-5 -53 -5 -105q0 -142 34 -282q14 -47 40 -91q25 -45 69 -79
q45 -35 107 -36q63 2 113 41q24 19 41 44q9 12 16 26q2 4 5 9q0 2 1 4q5 8 8 17q8 30 9 55v4q1 18 1 35v17q-4 102 -20 199q-15 98 -37 193q-22 96 -47 190q-52 189 -129 372q-19 46 -44 92l-1 1q0 2 -1 3q43 14 87 23q47 9 95 14q47 5 95 6h20q85 0 167 -23
q95 -27 152 -105q3 -3 7 -4h2q3 0 5 2zM446 295q-3 3 -4 7v3q0 2 1 4q29 45 36 92q5 30 5 56q0 17 -3 46t-10 55t-8 27q-1 2 -1 4t1.5 5t5.5 4q1 1 3 1q6 0 10 -7q3 -5 14 -51q8 -34 8 -79q0 -16 -2 -58t-42 -106q-2 -3 -6 -4h-3q-2 0 -5 1zM428 805q-1 2 -1 4t1 4.5t5 4.5
q2 1 4 1q6 0 10 -6q1 -2 8 -29q6 -24 6 -63v-11q0 -5 -3 -8q-2 -2 -5 -2h-2q-5 0 -7.5 3t-2.5 7q0 44 -6 69t-7 26zM247 1423q-1 2 -1 4t1 5t4 5q3 1 5 1q6 0 9 -5q4 -5 27.5 -52.5t50 -117.5t37.5 -143v-2q0 -3 -2 -6t-6 -4q-5 0 -8 2.5t-4 6.5q-11 71 -37.5 140.5
t-50 116.5t-25.5 49zM73 1587v1l0.5 -0.5t1.5 -0.5h-2z`,
  `M1035 1176q2 4 1.5 8t-4.5 7q-73 46 -156 66q-31 7 -61 7q-40 0 -79 -12q-70 131 -171 241q-58 64 -136 107q-40 22 -86 31q-22 5 -45 5q-25 0 -51 -6q-50 -14 -89 -47q-38 -33 -62 -74q-46 -83 -62 -171q-21 -110 -21 -219q0 -64 7 -128q18 -173 79 -337q32 -82 77 -157
q46 -76 111 -138q66 -64 160 -89q23 -5 46 -5q20 0 40 4q20 -19 44 -34q45 -26 95 -28h6q47 0 86 14q43 14 79 41q70 58 89 145q14 66 14 132q0 19 -1 37q-11 168 -63 329q-49 160 -126 310q-6 11 -13 23q0 1 -1 3q36 12 72 12q29 0 59 -8q41 -9 77 -28q37 -18 70 -43h1
q3 -2 7 -1.5t7 3.5zM494 350q-2 -1 -4 -1t-4.5 0.5t-5.5 3.5q-2 3 -16.5 36t-25.5 91q-8 40 -8 89q0 23 2 47q1 4 4 7t6 3h1q5 -1 7.5 -4t2.5 -8q-2 -26 -2 -51q0 -44 9 -90t22.5 -77t15.5 -32q1 -3 1 -5t-0.5 -4.5t-4.5 -4.5zM212 462q-1 2 -1 4t1 5t5 5q2 1 4 1q6 0 9 -6
q37 -65 87.5 -104t89.5 -56.5t41 -17.5q5 -1 6 -5q1 -2 1 -5v-3q-1 -4 -5 -6q-1 -1 -3 -1t-5 1q-5 0 -46 18t-93 59.5t-91 110.5zM136 615v3q0 2 1 5t5 5h4q6 0 9 -7q12 -36 15 -43q3 -2 4 -7l1 -5q0 -2 -1.5 -4t-3.5 -3.5t-3 -1.5q-2 -1 -4 -1q-3 0 -6 2.5t-7.5 15.5
t-13.5 41zM181 1570q3 -2 3.5 -6.5t-2.5 -7.5q-47 -58 -70.5 -110t-30.5 -86q-6 -29 -6 -34v-1q-1 -4 -4 -6.5t-7 -2.5q-5 1 -7.5 4t-2.5 7t7 39t31.5 89t74.5 114q3 4 8 4q3 0 6 -3zM539 1468q101 -100 174 -224q-1 -1 -2 -1q-1 -1 -2 -1q-79 -38 -130 -109
q-51 -69 -83 -149q-66 -160 -74 -335q-1 -17 -1 -34q0 -71 14 -142q15 -76 54 -148q-14 2 -27 6q-69 22 -123 81q-105 118 -153 273q-24 76 -37 156q-14 79 -20 160q-5 61 -5 122q0 99 14 196q12 78 41 145q29 70 89 101q29 13 63 13h5q37 -2 73 -18q72 -33 130 -92z
M720 1232l16 -28q81 -145 133 -304q25 -79 42 -160q18 -82 20 -165q1 -14 1 -28q0 -68 -17 -135q-20 -83 -85 -132q-33 -22 -73 -25q-9 -1 -18 -1q-30 0 -56 10q-38 16 -62 45q1 1 3 2l3 3q70 62 103 143q34 79 51 162v3q0 2 -1.5 5t-6.5 4h-3q-2 0 -4.5 -1.5t-3.5 -5.5
q-26 -79 -65 -151q-39 -73 -100 -119l-4 -2q-1 -1 -2 -1q-1 1 -1 2q-2 2 -3 4q-18 31 -32 65q-14 35 -24 73q-10 37 -16 77q-6 39 -9 78q-4 45 -4 91q0 116 29 231q21 80 65 149q45 71 118 109q2 1 3 1q2 1 3 1z"
`,
  `M997 1171q3 3 3.5 7t-1.5 8q-31 37 -73 57q-41 20 -86 31l-10 2q-3 1 -7 1q0 4 -1 7q-1 5 -2 11q-23 93 -77 175q-14 21 -29 40q-17 20 -36 38q-37 34 -81 60q-88 51 -194 51h-4q-108 -6 -194 -62q-21 -14 -41 -28q-22 -18 -40 -39q-35 -42 -54 -90t-27 -96
q-9 -48 -10 -96v-13q0 -184 54 -355q35 -118 91 -229q-3 -1 -6 -1q-11 -1 -22 -3q-44 -7 -87 -25q-21 -9 -39 -25t-22 -42v-7q0 -21 10 -39q11 -21 26 -38q33 -33 76 -50q85 -33 175 -39q38 -3 76 -4q57 -61 131 -108q84 -55 188 -66q12 -1 24 -1q40 0 78 10q9 1 17 4l8 2
q5 2 13 5t15 7q32 17 47 49q12 26 12 51q0 5 -1 10q-2 29 -11 54q-20 48 -54 84q-68 69 -152 106q-42 18 -85 32q-43 13 -88 22q-88 18 -178 19h-31q-26 46 -47 94q-36 78 -62 160q-54 162 -54 327v6q1 84 30 155q15 35 38 61q11 13 25 22q16 12 33 22q68 40 141 42h8
q70 0 135 -35q34 -18 64 -42q15 -12 27 -26q13 -14 25 -31q41 -56 68 -124q-17 1 -34 1t-34 -1q-92 -4 -172 -54q-41 -27 -56 -75q-5 -21 -5 -41q0 -26 9 -52q7 -22 19 -43t31 -37q37 -30 82 -44t91 -19q18 -2 37 -2q28 0 58 5q7 1 15 5q2 1 5.5 3t6 4.5l3.5 3.5
q11 11 17 22q13 24 20 47q14 47 16 95q1 16 1 32q0 61 -12 120q2 0 4 -1q3 0 5 -1q43 -10 81 -30q39 -20 65 -53v-1q3 -3 7 -3.5t8 1.5zM225 634q15 -27 33 -59t32.5 -56t15.5 -27h1q1 -3 1 -5q0 -1 -0.5 -3.5t-4.5 -5.5q-3 -1 -5 -1t-4.5 0.5t-4.5 4.5q-1 1 -15 25t-33 57
t-34 61q-1 2 -1 4t1 5t5 5q2 1 4 1q6 0 9 -6zM474 296q-3 3 -3 7t2 7q4 4 8 4t7 -3q51 -42 103 -58q49 -15 90 -15h25t49.5 6.5t27.5 7.5q2 1 4 1t5 -1.5t4 -5.5q1 -2 1 -4t-1.5 -4.5t-5.5 -4.5q-1 -1 -29.5 -8t-74.5 -7h-5q-44 0 -97.5 16t-109.5 62zM431 467
q-55 63 -100 135q-12 19 -24 39h22q180 -1 337 -82q78 -44 126 -112q24 -35 32 -71q3 -15 3 -28q0 -3 -1 -12.5t-8 -18.5q-6 -9 -16 -11q-4 -1 -13.5 -3t-18.5 -3q-17 -2 -34 -2q-21 0 -42 3q-75 12 -142 57q-17 11 -34 24q64 5 128 14q4 0 6.5 3.5t2.5 7.5q-1 4 -4.5 6.5
t-7.5 2.5h-1q-70 -12 -142 -18q-37 31 -69 69zM152 633q16 2 31 4h2q24 -48 52 -93q49 -80 113 -150v-1q-30 0 -60 2q-89 5 -171 37q-42 17 -72 48q-14 15 -24 35q-9 17 -9 35v4q3 20 18.5 34.5t35.5 22.5q41 16 84 22zM65 1166q4 -1 6.5 -4t2.5 -8q-1 -7 -1 -16
q0 -36 12 -100t28.5 -128.5t25.5 -87.5q6 -3 6 -9q0 -8 -6 -11q-3 -2 -6 -1.5t-5 1.5q-10 10 -28.5 79.5t-33.5 150.5q-13 71 -13 113v11q1 4 4 7t7 3h1zM400 1648q4 0 7 -3t3 -7t-2.5 -7t-6.5 -4q-67 -3 -116 -26.5t-80 -53t-46.5 -52t-15.5 -24.5q-2 -4 -6 -5q-2 -1 -4 -1
q-1 0 -3 1q-4 2 -6 6v3q0 2 1 5q0 2 16.5 26t49.5 56t85 57t124 29zM662 1272q19 1 37 1q19 0 37 -1v-1q1 -1 1 -2q29 -78 35 -162q2 -17 2 -33q0 -25 -4 -49q-3 -20 -10 -37q-4 -9 -8 -15l-2 -2l-6 -3q-33 -8 -73 -8h-9q-43 2 -84 12q-42 10 -76 34q-17 13 -28 29
q-10 18 -17 39q-10 25 -10 50q0 16 4 31q12 40 48 66q73 47 163 51zM805 1305q1 -2 1 -3q0 -2 -2 -5t-6 -4h-3q-2 0 -5 1.5t-4 5.5q-8 29 -21 58t-23.5 48.5t-11.5 20.5q-1 3 -1 5t1 4.5t4 4.5q3 1 5 1q6 0 9 -5q2 -2 12.5 -22t23.5 -49.5t21 -60.5z"
`,
];
export default function Index() {
  const pathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    // 确保 pathsRef 已经被正确赋值
    if (!pathsRef.current || pathsRef.current.length === 0) return;

    // 遍历每个路径，为它们设置动画
    pathsRef.current.forEach((path, index) => {
      if (path) {
        // 设置动画延迟
        const length = path.getTotalLength(); // 获取路径的总长度
        path.style.strokeDashoffset = `${length}`; // 初始偏移量，路径不可见
        path.style.strokeDasharray = `${length}`; // 设置虚线长度

        setTimeout(() => {
          path.style.transition = `stroke-dashoffset 2s ease-in-out ${
            index * 0.6
          }s, fill 2s ease-in-out ${index * 0.8}s`;
          path.style.strokeDashoffset = '0'; // 动画开始时，路径绘制
          path.style.fill = '#aa1616'; // 动画开始时，路径绘制
        });
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 8000 1800"
      >
        {paths.map((path, index) => (
          <path
            className={styles.path}
            ref={el => {
              if (el && pathsRef.current) {
                pathsRef.current[index] = el;
              }
            }}
            transform={`translate(${
              index === 3 ? index * 1000 + 200 : index * 1000
            }, 0)`}
            key={index}
            d={path}
          />
        ))}
      </svg>
    </div>
  );
}
