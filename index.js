class ElementFactory {
  static createElement(
    elementTag,
    className = undefined,
    innerHTML = undefined,
    eventListener = undefined
  ) {
    const element = document.createElement(elementTag);

    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    if (eventListener)
      element.addEventListener(eventListener.event, eventListener.callback);

    return element;
  }
}

class ElementDistributor {
  static init(parentSelector, location, element) {
    const parentElement = document.querySelector(parentSelector);

    if (!parentElement) {
      console.error(`Parent selector "${parentSelector}" not found.`);
      return;
    }

    switch (location) {
      case 'end':
        parentElement.append(element);
        break;
      case 'start':
        parentElement.prepend(element);
        break;
      default:
        console.error(`Location "${location}" not found.`);
    }
  }
}

const dialogParameters = {
  buttonIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="greetingsButtonTM__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ed1c24" d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5zm7-2.68l-4.59 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.09c.49-.47.49-1.26 0-1.75a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.29-.49-1.79 0L14.19 13l-.69-.73l6.87-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.71-.7l5.5-5.48c.5-.49.5-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77c-.5-.48-1.29-.48-1.79.01"/></svg>`,
  closeButton: `<svg xmlns="http://www.w3.org/2000/svg" class="greetingsButtonTM__closeButton__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#5a5a5a" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>`,
  greetingsMessage: `<svg class="greetingsMessageTM__icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 700 875" preserveAspectRatio="xMidYMid meet" x="0px" y="0px"><g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1490 6550 c0 -5 8 -10 18 -10 9 -1 33 -10 52 -21 19 -11 28 -18 19 -15 -93 27 -238 32 -318 9 -23 -6 -24 -7 -5 -14 10 -4 33 -8 50 -8 17 -1 55 -9 85 -18 l54 -17 -74 -8 c-40 -4 -103 -15 -140 -24 -66 -17 -198 -71 -190 -78 2 -2 28 1 57 6 60 12 77 4 46 -20 -12 -10 -48 -37 -80 -62 -55 -43 -174 -181 -174 -201 0 -6 14 -1 30 11 17 12 30 19 30 16 0 -2 -22 -37 -49 -76 -60 -86 -97 -176 -112 -270 -14 -83 -27 -80 -38 11 -7 63 -8 64 -15 26 -5 -21 -6 -77 -4 -125 5 -96 30 -177 78 -257 l30 -50 -60 63 c-33 34 -60 59 -60 55 0 -5 9 -32 20 -62 29 -75 83 -156 147 -218 29 -29 48 -53 41 -53 -14 0 -101 23 -133 35 -15 6 -11 -2 13 -27 42 -45 119 -87 197 -109 l60 -17 -82 -7 c-46 -4 -83 -10 -83 -14 0 -10 89 -67 160 -102 36 -17 141 -65 235 -105 93 -41 171 -78 173 -82 1 -5 -22 -18 -53 -29 -54 -20 -67 -19 -43 5 16 16 6 24 -65 53 -57 23 -58 23 -90 4 -100 -58 -254 -197 -350 -317 -72 -90 -76 -108 -11 -49 32 30 87 68 122 84 71 33 97 30 30 -4 -58 -30 -146 -122 -186 -197 -18 -34 -31 -62 -29 -62 3 0 24 16 48 35 70 60 88 63 42 9 -22 -27 -82 -114 -133 -194 -50 -80 -99 -153 -108 -164 -16 -18 -16 -18 8 -11 43 13 143 60 189 90 l45 27 -49 -68 c-76 -107 -171 -229 -231 -293 -30 -32 -54 -62 -54 -65 0 -11 143 65 230 123 47 31 92 60 100 65 8 5 -8 -16 -37 -46 -122 -130 -196 -291 -227 -493 -6 -38 -4 -36 33 33 48 89 131 198 206 272 l57 55 -66 -98 c-79 -117 -123 -203 -164 -319 -64 -179 -88 -381 -72 -592 11 -146 28 -222 29 -130 2 168 94 427 187 531 l35 38 -26 -53 c-33 -67 -61 -177 -71 -270 -8 -81 3 -242 17 -242 5 0 9 11 9 24 0 26 44 172 58 193 4 7 6 -48 4 -121 -3 -93 1 -166 13 -242 16 -105 73 -303 96 -334 9 -13 10 -12 5 2 -12 40 -18 172 -11 254 7 70 10 83 16 59 4 -16 15 -59 24 -95 9 -36 28 -94 42 -130 26 -66 93 -194 98 -188 2 2 -7 35 -20 73 -29 85 -40 178 -29 242 l8 48 7 -79 c5 -43 16 -102 25 -130 15 -45 71 -166 77 -166 1 0 1 58 -1 129 -2 71 1 144 7 163 7 27 9 13 10 -71 3 -342 105 -602 331 -844 92 -98 129 -121 68 -41 -69 90 -142 202 -177 273 -37 73 -36 92 2 29 30 -51 111 -144 137 -158 12 -6 5 10 -21 49 -48 72 -50 85 -5 42 l34 -33 7 31 c10 48 23 46 17 -4 -4 -37 2 -57 34 -122 l38 -78 7 70 c7 74 23 125 37 125 10 0 45 -106 63 -195 l13 -60 7 40 c13 66 10 255 -5 325 -8 36 -12 67 -10 69 8 8 65 -131 78 -192 8 -34 19 -115 25 -180 14 -141 32 -225 72 -327 31 -78 84 -181 74 -144 -35 135 -62 494 -36 494 6 0 11 -15 11 -33 0 -84 67 -218 157 -315 l53 -57 -25 57 c-30 65 -55 175 -54 233 0 34 3 28 20 -40 17 -69 126 -311 136 -301 2 2 -3 35 -12 75 -9 44 -14 117 -14 184 1 62 4 99 6 82 29 -236 112 -402 293 -588 114 -119 147 -140 85 -57 -92 126 -176 296 -210 426 -24 93 -17 95 25 7 47 -100 123 -212 184 -272 l46 -45 -35 66 c-20 37 -45 93 -56 125 -24 69 -38 246 -20 257 8 5 11 -8 11 -41 1 -214 154 -438 379 -553 l45 -22 -56 63 c-77 88 -133 178 -158 255 -12 36 -20 67 -17 70 2 3 16 -15 31 -40 85 -146 289 -286 507 -350 127 -36 417 -74 457 -59 8 4 -17 21 -62 44 -119 60 -209 122 -297 206 -113 108 -143 153 -50 75 106 -89 247 -157 415 -201 46 -12 44 -10 -58 60 -43 29 -112 84 -152 122 -74 69 -174 204 -174 235 0 9 16 -6 35 -35 38 -57 99 -110 163 -142 47 -24 51 -21 23 18 -27 38 -57 117 -65 171 l-6 45 28 -60 c16 -33 39 -69 51 -80 l22 -19 -6 29 c-4 17 -8 36 -11 43 -8 28 7 8 38 -50 32 -59 126 -174 135 -164 3 3 0 35 -5 73 -17 106 -24 199 -16 190 4 -4 15 -38 25 -75 19 -76 76 -229 88 -237 5 -2 6 26 3 63 -5 71 14 276 27 300 5 8 9 -24 9 -74 1 -66 8 -111 26 -169 41 -130 49 -133 69 -23 10 51 35 161 56 243 31 119 39 141 39 105 0 -25 -3 -68 -7 -97 -5 -38 -4 -50 4 -43 17 14 45 100 60 186 l14 79 -3 -110 c-3 -87 -10 -131 -33 -208 -17 -53 -27 -97 -22 -97 15 0 97 124 119 180 30 73 59 187 60 230 1 29 3 31 10 15 4 -12 4 -52 0 -90 -4 -39 -6 -72 -4 -74 6 -7 65 95 85 149 12 30 24 83 26 117 6 66 23 77 23 15 -1 -101 -57 -261 -117 -332 -50 -60 -15 -40 47 27 74 79 115 161 140 283 l18 85 1 -67 c1 -37 -4 -79 -9 -93 -8 -20 -7 -26 2 -23 7 3 30 38 52 80 31 61 40 90 44 149 6 85 20 69 21 -23 1 -92 -49 -208 -138 -317 l-35 -45 34 20 c57 32 168 143 216 215 52 79 83 160 92 239 4 39 7 49 13 35 13 -33 10 -129 -5 -178 -8 -26 -11 -47 -6 -47 16 0 82 109 101 166 l20 59 -5 -58 c-5 -66 -42 -153 -89 -211 -59 -72 -51 -73 22 -1 76 74 141 163 187 258 18 36 34 57 45 57 16 0 17 9 12 76 -6 74 -5 76 14 66 21 -12 92 -87 109 -118 10 -18 13 -17 32 15 18 29 33 98 58 260 l6 35 29 -50 c31 -53 69 -155 69 -188 1 -18 2 -18 10 -5 14 25 31 180 24 231 -6 47 11 148 26 148 9 0 50 -174 50 -214 0 -17 4 -26 8 -20 13 13 50 112 63 167 6 26 15 47 19 47 4 0 18 -20 31 -45 14 -26 27 -41 32 -36 5 5 13 67 16 138 7 118 20 173 40 173 13 0 48 -42 75 -90 l26 -45 0 95 c0 52 -4 110 -9 128 -5 17 -7 32 -5 32 3 0 30 -16 60 -35 l54 -35 -6 28 c-4 15 -19 54 -35 87 -15 33 -26 62 -23 64 3 3 54 -45 114 -106 61 -61 110 -108 110 -106 0 3 -16 32 -36 65 -79 130 -212 242 -348 293 -60 23 -222 52 -232 43 -3 -3 34 -17 81 -32 47 -15 85 -29 85 -31 0 -3 -48 -3 -107 0 l-108 4 90 -18 c166 -35 234 -69 314 -156 28 -31 51 -61 51 -66 0 -5 -23 6 -51 26 -28 19 -59 35 -69 35 -29 0 -33 -35 -10 -79 28 -55 25 -60 -12 -24 -82 77 -102 63 -102 -73 0 -52 -2 -94 -6 -94 -3 0 -11 26 -19 57 -27 116 -83 183 -187 224 -52 20 -79 23 -226 25 -92 2 -184 8 -205 13 -20 6 -38 9 -40 7 -7 -6 74 -56 137 -84 36 -16 115 -42 175 -57 61 -14 133 -37 161 -50 57 -25 124 -86 149 -135 l16 -31 -25 16 c-39 26 -49 11 -42 -58 l6 -60 -26 39 c-33 50 -115 134 -125 129 -4 -3 -1 -31 7 -63 7 -31 13 -77 14 -102 l0 -45 -37 64 c-39 65 -157 201 -175 201 -5 0 1 -13 15 -30 40 -47 95 -143 127 -221 17 -39 30 -74 30 -77 0 -3 -16 13 -36 36 -20 24 -50 50 -66 58 l-31 16 8 -29 c20 -79 25 -148 15 -200 -15 -86 -16 -85 -40 39 -19 95 -65 174 -154 264 -66 66 -202 164 -228 164 -3 0 21 -27 53 -60 70 -72 78 -99 12 -41 -51 46 -149 97 -203 106 -27 4 -15 -5 48 -36 45 -23 102 -59 125 -81 l42 -39 -45 24 c-25 14 -56 28 -70 31 -24 7 -23 5 7 -22 18 -16 33 -31 33 -33 0 -3 -31 10 -69 29 -50 25 -88 36 -135 39 -70 6 -93 -9 -33 -23 28 -6 29 -8 12 -15 -11 -4 -33 -8 -48 -8 -15 -1 -44 -8 -65 -17 l-37 -16 28 -12 c27 -12 27 -13 9 -29 -10 -9 -27 -17 -37 -17 -13 0 -15 -3 -7 -13 7 -8 6 -18 -4 -31 -8 -11 -14 -30 -14 -42 0 -18 8 -24 48 -32 l47 -11 -47 5 c-44 5 -46 4 -41 -17 6 -20 5 -21 -18 -6 -13 8 -35 18 -48 22 -24 7 -24 7 -19 -60 l6 -66 -22 20 c-28 26 -42 26 -56 2 -26 -50 2 -96 85 -139 22 -12 37 -21 33 -22 -20 -1 -161 32 -210 49 -45 16 -58 17 -58 6 0 -7 15 -22 33 -34 19 -12 26 -21 16 -21 -9 0 -33 11 -54 25 -29 20 -40 23 -51 14 -19 -15 -18 -54 2 -84 9 -14 13 -25 9 -25 -11 0 -66 40 -102 73 -38 36 -52 29 -35 -15 6 -18 10 -34 7 -36 -2 -2 -27 19 -56 48 l-53 53 -18 -23 c-11 -13 -18 -38 -18 -63 l0 -40 -21 19 c-27 24 -49 67 -49 94 0 53 -71 -11 -90 -82 -7 -22 -9 -52 -5 -67 5 -24 2 -23 -34 15 -44 46 -61 94 -61 173 0 53 0 53 -27 46 -41 -9 -73 -33 -91 -66 -10 -16 -20 -29 -23 -29 -12 0 11 83 32 117 l21 33 -21 0 c-30 0 -73 -19 -98 -42 -40 -37 -25 0 18 47 49 54 41 56 -68 20 -42 -14 -81 -24 -87 -22 -17 6 50 63 107 91 l52 25 -47 1 c-70 0 -67 16 5 29 109 19 211 14 260 -11 38 -21 55 -23 192 -22 83 0 227 4 320 8 229 11 217 -2 255 268 11 82 20 153 20 159 0 8 20 10 70 5 62 -6 76 -4 123 17 28 14 81 50 117 81 63 55 66 57 112 51 25 -3 93 -18 149 -34 57 -16 105 -28 107 -26 6 5 -122 42 -210 62 l-77 16 38 46 c21 25 46 58 56 74 16 24 23 27 75 27 130 0 313 -58 445 -142 59 -38 85 -46 61 -19 -27 29 -185 107 -276 136 -57 18 -118 29 -183 32 l-99 6 7 34 c3 19 1 59 -5 89 -13 64 -134 357 -125 304 3 -19 12 -73 21 -120 18 -108 29 -250 20 -284 -4 -15 -14 -26 -24 -27 -10 0 -12 -3 -4 -6 19 -7 15 -20 -28 -83 l-39 -58 -103 3 c-57 2 -85 1 -63 -1 22 -2 64 -7 94 -10 l54 -6 -49 -49 c-90 -92 -148 -104 -322 -70 -148 29 -175 75 -94 159 20 20 35 45 33 54 -4 30 35 104 80 153 77 84 221 133 261 89 16 -19 22 -36 19 -61 -2 -21 -21 -15 -21 6 0 71 -146 45 -233 -42 -30 -30 -87 -129 -87 -150 0 -2 39 9 88 25 48 15 121 37 162 49 100 28 152 78 170 162 14 67 7 108 -26 159 -57 88 -125 111 -274 92 -132 -18 -171 -17 -306 7 -129 22 -184 20 -245 -12 -45 -22 -96 -82 -104 -121 -9 -39 -22 -35 -36 10 -9 31 -8 45 5 75 18 43 6 49 -22 10 -35 -50 -47 -106 -33 -166 23 -106 83 -156 236 -198 44 -12 102 -32 128 -46 60 -30 127 -90 127 -113 0 -52 -121 -101 -310 -127 -193 -26 -340 -4 -451 68 -59 38 -61 36 70 82 71 25 102 31 178 31 61 1 84 4 70 9 -44 17 -159 1 -271 -37 l-108 -37 -30 28 c-16 15 -68 79 -115 141 -47 62 -97 121 -111 132 -14 11 -22 24 -18 28 4 4 89 7 189 7 180 0 183 0 271 -32 50 -18 85 -28 79 -22 -22 22 -154 59 -246 69 -110 13 -270 0 -377 -29 -19 -5 -27 -9 -17 -10 9 -1 17 -9 17 -19 0 -9 33 -49 73 -88 66 -65 151 -191 163 -241 3 -14 -10 -25 -54 -47 -67 -34 -153 -88 -147 -94 2 -2 16 5 32 16 15 10 62 38 104 61 l76 41 56 -112 c76 -152 146 -265 208 -332 l51 -56 -78 0 c-44 -1 -99 -5 -124 -11 -73 -16 -158 -22 -140 -10 8 6 29 11 45 11 26 1 28 2 11 11 -17 11 -39 8 -170 -17 -19 -4 -26 -3 -22 4 4 6 35 17 69 24 l62 12 -55 12 -55 12 73 1 c85 1 87 14 6 32 -45 10 -71 10 -127 1 -39 -7 -76 -17 -83 -23 -8 -6 -19 -9 -26 -6 -7 3 12 16 42 29 113 51 111 49 35 42 -38 -3 -125 -23 -192 -44 -68 -20 -123 -36 -123 -35 0 1 51 31 113 66 l112 64 -49 3 c-26 2 -69 -4 -94 -13 -43 -14 -45 -14 -31 1 9 8 45 27 80 40 l64 24 -85 -3 c-47 -3 -94 -7 -105 -11 -11 -3 7 7 40 23 l60 29 -28 11 c-95 37 -256 -39 -328 -155 -12 -19 -24 -33 -26 -30 -10 10 41 82 101 144 58 60 59 63 31 57 -98 -21 -249 -125 -336 -232 -23 -29 -44 -51 -47 -48 -8 8 59 119 113 186 54 67 161 166 203 188 39 20 17 24 -40 7 -114 -33 -246 -143 -318 -266 -114 -192 -124 -399 -29 -580 l28 -55 -33 38 c-97 109 -165 316 -167 506 l-1 86 -37 -78 c-38 -78 -71 -191 -71 -241 0 -44 -15 -29 -40 41 -15 42 -26 101 -29 157 l-6 91 -28 -63 c-34 -76 -62 -169 -72 -243 l-8 -54 -14 40 c-69 197 25 454 219 600 58 43 198 122 198 110 0 -2 -36 -54 -80 -114 -44 -61 -80 -113 -80 -117 0 -4 35 27 78 68 43 41 105 93 138 115 60 41 184 107 189 101 2 -2 -22 -37 -52 -78 -79 -108 -81 -117 -18 -66 115 94 229 131 380 123 l90 -4 -41 18 c-82 37 -159 51 -299 56 -120 4 -153 2 -230 -16 -288 -69 -508 -278 -607 -576 -20 -61 -23 -90 -23 -227 0 -164 -4 -171 -36 -60 -70 240 -8 466 195 705 32 37 56 71 53 74 -9 8 -107 -26 -167 -59 -78 -43 -169 -118 -209 -172 -19 -25 -36 -44 -38 -42 -7 7 37 88 82 152 106 149 301 281 485 329 86 22 217 45 260 45 26 0 31 3 20 10 -8 5 -50 10 -92 10 -267 0 -535 -99 -744 -276 -48 -41 -62 -49 -47 -29 48 69 212 210 415 360 120 88 218 163 218 167 0 12 -122 -37 -231 -93 -56 -29 -142 -82 -192 -120 -51 -37 -94 -65 -96 -63 -7 6 63 105 120 170 58 66 149 150 244 228 33 27 65 54 70 59 23 22 -56 -7 -165 -60 -100 -49 -125 -66 -196 -137 -96 -96 -143 -177 -196 -331 -41 -117 -41 -85 -2 53 28 98 69 183 132 272 l45 65 -39 -36 c-48 -45 -123 -99 -138 -99 -5 0 10 21 35 48 26 26 74 89 109 140 82 121 167 198 356 323 157 103 196 134 102 79 -106 -62 -211 -111 -296 -139 -89 -29 -207 -47 -197 -30 4 5 12 9 20 9 7 0 55 21 106 46 161 81 298 246 315 381 8 55 6 54 -60 -39 -60 -87 -158 -183 -243 -240 -64 -43 -204 -118 -220 -118 -4 0 24 20 62 46 78 50 158 125 205 191 17 23 29 43 27 43 -2 0 -22 -17 -43 -37 -56 -53 -176 -129 -235 -148 -28 -9 -52 -15 -54 -13 -2 2 18 37 46 78 47 70 109 181 109 196 0 3 -17 -16 -39 -43 -40 -50 -101 -111 -101 -101 0 8 81 189 98 218 8 15 -2 8 -26 -17 -49 -53 -107 -162 -144 -273 l-29 -85 5 72 c3 43 17 108 35 160 17 48 28 89 26 91 -2 2 -30 -14 -62 -36 -65 -44 -174 -156 -199 -203 -29 -56 -25 -23 6 50 71 166 171 307 318 450 48 46 80 80 72 75 -8 -4 -87 -56 -175 -114 -251 -166 -244 -157 43 57 100 75 182 142 182 149 0 8 -10 14 -21 14 -38 0 -198 -92 -274 -157 -83 -72 -108 -83 -50 -22 47 48 178 136 255 171 65 30 93 55 119 106 32 64 35 82 13 82 -61 0 -195 -70 -296 -154 -69 -57 -43 -14 37 61 69 64 157 113 297 163 47 17 96 40 110 50 24 19 23 19 -38 0 -140 -44 -122 -23 69 76 113 58 135 73 104 68 -90 -14 -279 -56 -394 -87 -67 -19 -118 -31 -114 -27 12 10 140 62 288 115 156 57 246 101 304 149 24 20 40 36 36 36 -4 0 -45 -13 -92 -30 -116 -41 -122 -37 -25 15 45 24 108 64 140 89 54 41 90 76 80 76 -3 0 -72 -25 -154 -56 -219 -82 -308 -114 -303 -109 3 2 97 50 209 107 209 105 350 189 475 281 81 61 77 63 -67 48 -56 -6 -103 -10 -105 -8 -2 2 46 28 107 58 131 63 150 79 94 79 -22 0 -62 3 -91 6 l-52 7 84 42 c168 86 249 155 296 253 25 54 37 136 21 155 -6 7 -32 53 -57 102 -82 157 -167 293 -218 350 -27 31 -52 54 -55 51 -3 -3 1 -14 9 -23 7 -10 -27 20 -76 67 -84 79 -155 127 -215 145 -24 7 -24 7 -7 -12 26 -30 21 -33 -31 -13 -106 41 -332 68 -332 40z m-381 -3242 c-46 -60 -49 -64 -49 -52 0 11 68 94 77 94 2 0 -10 -19 -28 -42z m2914 -338 c108 -41 148 -120 116 -233 -11 -41 -37 -47 -29 -6 3 13 5 50 5 82 0 55 -2 61 -37 92 -42 39 -106 60 -158 51 -33 -5 -50 -19 -76 -62 -20 -32 -28 -6 -11 32 30 62 98 78 190 44z m1152 -500 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m51 -26 c18 -14 18 -14 -6 -3 -31 14 -36 19 -24 19 6 0 19 -7 30 -16z m-1388 -86 c-5 -106 -24 -154 -64 -164 -33 -9 -78 24 -82 59 -2 14 4 40 14 58 19 37 112 139 127 139 6 0 8 -36 5 -92z m538 48 c-22 -116 -68 -196 -113 -196 -28 0 -63 29 -63 51 0 23 148 179 169 179 10 0 12 -9 7 -34z m-760 -96 c20 -38 53 -85 74 -104 l37 -34 249 5 c137 3 266 8 286 13 20 4 39 5 42 3 9 -10 -24 -62 -47 -75 -24 -13 -480 -25 -541 -14 -65 12 -101 66 -130 194 -24 108 -21 109 30 12z m-11 -195 c19 -39 58 -65 102 -66 l28 0 -25 -10 c-31 -13 -69 -4 -98 24 -24 22 -53 104 -51 146 1 21 4 18 14 -16 7 -22 21 -58 30 -78z m-300 -135 c-3 -5 -25 -9 -48 -9 -40 1 -40 2 -12 9 44 11 67 11 60 0z m-192 -60 c-118 -56 -246 -142 -348 -231 l-70 -61 73 71 c41 39 111 95 155 125 80 53 260 146 281 146 6 0 -35 -22 -91 -50z m1531 4 c26 -9 45 -18 43 -20 -2 -2 -28 5 -58 15 -30 11 -49 20 -43 20 6 1 32 -6 58 -15z m-2409 -156 c0 -105 4 -146 20 -193 l19 -60 8 100 c4 55 14 120 23 145 l15 45 -5 -91 c-6 -94 9 -298 25 -355 l9 -32 -24 23 c-32 30 -89 141 -111 215 -22 77 -22 202 0 278 9 31 18 57 19 57 1 0 2 -60 2 -132z m2593 77 c61 -29 112 -56 112 -59 0 -4 -227 101 -239 111 -18 15 32 -6 127 -52z m-2362 -295 c14 -68 95 -260 108 -260 4 0 3 17 0 39 -7 42 10 158 29 204 10 24 12 7 13 -105 0 -106 5 -146 21 -195 23 -69 18 -74 -33 -42 -66 40 -140 179 -170 319 -15 70 -18 210 -7 275 6 34 9 24 15 -60 4 -55 15 -134 24 -175z m2539 195 l20 -16 -20 10 c-11 5 -29 17 -40 26 l-20 16 20 -10 c11 -5 29 -17 40 -26z m85 -61 c0 -3 -13 4 -30 16 -16 12 -30 24 -30 26 0 3 14 -4 30 -16 17 -12 30 -24 30 -26z m31 -21 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m-2416 -270 c23 -80 67 -162 120 -227 25 -31 42 -56 39 -56 -4 0 -27 16 -50 36 -47 37 -84 94 -107 159 -15 42 -31 145 -23 145 2 0 12 -26 21 -57z"/><path d="M5464 6520 c-22 -5 -57 -15 -77 -23 -20 -9 -44 -13 -54 -11 -26 7 -102 -47 -172 -121 -64 -69 -125 -165 -168 -266 -32 -76 -46 -96 -37 -51 4 18 4 32 0 32 -8 0 -30 -54 -73 -178 -34 -97 -35 -105 -23 -148 42 -149 182 -268 403 -342 l88 -30 -73 -22 c-85 -26 -83 -28 62 -65 58 -15 106 -28 108 -30 2 -1 -28 -8 -65 -15 -37 -6 -86 -16 -108 -22 l-40 -10 28 -14 c29 -16 131 -48 185 -59 17 -4 32 -10 32 -15 0 -4 -31 -23 -70 -41 -38 -19 -70 -40 -70 -47 0 -30 46 -106 87 -141 48 -43 110 -68 190 -78 56 -6 63 -23 10 -23 -60 0 -59 -16 2 -28 51 -11 92 -34 80 -46 -4 -4 -204 18 -269 29 -35 6 -35 6 9 -14 24 -12 82 -33 130 -47 47 -15 106 -37 131 -49 51 -26 108 -71 76 -61 -44 14 -156 28 -180 22 -34 -8 -33 -19 7 -56 47 -44 116 -75 251 -110 66 -17 142 -40 170 -50 27 -11 51 -18 53 -17 1 2 -14 20 -35 39 -52 51 -131 88 -242 115 l-95 23 83 -3 c45 -1 82 1 82 4 0 4 -28 32 -61 63 -34 32 -59 59 -57 61 6 7 150 -59 192 -88 22 -14 42 -25 44 -22 8 8 -39 74 -84 115 -25 23 -75 56 -112 73 l-67 32 40 7 c22 4 58 10 80 14 37 7 33 9 -70 30 -60 12 -123 23 -139 23 -39 1 -31 10 129 131 103 78 146 105 194 120 64 19 111 44 111 59 0 5 -24 15 -52 23 l-53 15 40 17 c69 29 135 77 171 124 19 25 33 46 31 48 -1 2 -25 -8 -52 -21 -73 -36 -83 -30 -36 21 41 43 91 134 91 163 0 8 -13 -4 -28 -25 -28 -39 -69 -78 -61 -59 2 6 17 34 32 64 18 33 31 75 33 110 l5 56 -20 -40 -21 -40 5 52 c10 97 -9 171 -80 303 -36 67 -74 135 -85 150 -25 36 -25 44 0 30 29 -16 24 -1 -18 52 -42 54 -97 102 -162 144 l-45 29 35 5 35 5 -50 22 c-67 29 -172 46 -246 41 -32 -2 -59 -3 -59 -1 0 8 106 53 125 54 l20 0 -20 9 c-25 11 -96 10 -151 0z"/><path d="M3037 6461 c-52 -11 -55 -18 -10 -26 21 -3 49 -13 63 -21 l25 -14 -30 7 c-81 19 -334 -1 -350 -27 -3 -4 28 -8 68 -9 242 -5 527 -105 730 -256 33 -25 62 -43 64 -41 3 2 -6 21 -19 43 -37 59 -40 63 -34 63 12 0 120 -144 166 -220 39 -65 51 -79 56 -64 28 81 57 141 85 178 55 72 67 69 30 -6 -39 -78 -37 -102 3 -33 33 56 82 112 110 127 l21 11 -20 -24 c-12 -13 -27 -33 -35 -44 -15 -19 -15 -19 13 -1 30 18 131 56 151 56 6 0 -22 -18 -63 -40 -41 -21 -79 -45 -85 -51 -8 -9 -8 -10 1 -5 17 9 181 56 196 55 6 0 -10 -8 -38 -17 l-50 -16 75 -8 c102 -11 164 -32 236 -83 34 -23 104 -63 155 -88 52 -25 128 -65 169 -90 l75 -45 23 66 c12 36 22 71 22 78 0 7 -29 26 -65 42 -35 17 -85 45 -109 61 -25 17 -47 31 -50 31 -2 0 0 -15 5 -32 5 -18 9 -37 9 -42 0 -16 -33 19 -81 88 -53 75 -55 75 -74 -12 l-7 -32 -30 62 c-40 81 -152 193 -230 231 -67 32 -88 35 -65 9 29 -32 18 -33 -25 -2 -41 30 -68 38 -68 21 0 -6 5 -13 10 -16 12 -7 46 -71 60 -113 l10 -27 -17 25 c-9 14 -38 45 -63 70 -63 63 -175 117 -128 63 32 -38 29 -44 -10 -18 -38 25 -132 60 -132 49 0 -3 5 -15 11 -26 l11 -21 -30 21 c-16 12 -42 27 -58 33 -49 19 -168 49 -198 49 l-29 0 47 -41 c25 -22 46 -46 46 -52 0 -6 -10 -1 -22 10 -33 29 -118 77 -125 69 -4 -3 3 -16 14 -29 19 -20 93 -132 93 -139 0 -2 -26 21 -59 52 -104 98 -219 154 -341 163 -36 3 -82 2 -103 -2z"/><path d="M2715 6340 c-71 -10 -150 -36 -220 -74 l-50 -26 60 7 c33 5 114 8 180 7 132 -1 234 -18 383 -66 52 -16 96 -27 98 -25 6 5 -47 39 -104 68 -20 10 -32 18 -25 19 10 0 115 -35 168 -55 20 -8 20 -8 0 14 -26 30 -186 106 -250 120 -76 16 -173 20 -240 11z"/><path d="M2539 6225 c-75 -14 -189 -51 -189 -61 0 -7 121 -236 132 -251 7 -9 20 -7 54 10 54 26 56 37 7 37 -72 0 -18 19 75 26 50 4 92 10 92 15 0 4 -31 15 -69 25 -38 10 -67 22 -65 26 3 4 56 8 117 9 62 0 135 4 162 8 l50 7 -40 13 c-22 7 -98 15 -169 18 -101 5 -125 8 -110 17 12 7 89 11 216 11 224 0 224 1 88 67 -58 28 -76 32 -170 34 -62 2 -136 -2 -181 -11z"/><path d="M4204 6025 c-23 -16 -24 -16 95 -40 45 -9 90 -18 100 -21 9 -2 -15 11 -54 30 -90 43 -117 49 -141 31z"/><path d="M4508 5646 c-55 -15 -98 -41 -98 -61 0 -23 18 -27 29 -6 11 19 86 61 110 61 9 0 9 -5 1 -20 -9 -18 -8 -18 19 -9 20 7 29 17 28 30 -1 22 -21 23 -89 5z"/><path d="M4684 5632 c-36 -26 -83 -74 -58 -59 18 10 119 79 123 83 2 2 -2 4 -11 4 -8 0 -33 -13 -54 -28z"/><path d="M2953 5561 c-55 -9 -67 -21 -21 -21 19 0 50 -6 69 -12 l34 -13 -45 -6 c-33 -4 -20 -6 49 -7 52 -1 92 0 89 3 -2 3 -22 11 -44 19 l-39 15 42 0 c51 1 164 -22 217 -44 63 -26 51 -10 -13 19 -103 46 -232 64 -338 47z"/><path d="M2830 5491 c-18 -5 -2 -10 64 -19 87 -11 132 -9 68 4 -18 4 -29 10 -26 15 6 11 -70 10 -106 0z"/><path d="M4792 5471 c-12 -11 -55 -32 -95 -47 -68 -26 -132 -62 -125 -70 6 -6 142 47 185 72 24 14 47 33 53 44 13 24 11 24 -18 1z"/><path d="M4591 5461 c-29 -10 -65 -31 -80 -45 -26 -27 -25 -27 44 7 39 18 81 38 95 44 40 19 0 14 -59 -6z"/><path d="M4470 5445 c-13 -14 -21 -25 -18 -25 3 0 17 11 32 25 15 14 23 25 18 25 -5 0 -19 -11 -32 -25z"/><path d="M3645 5362 c188 -126 367 -358 382 -497 6 -49 20 -54 41 -14 32 60 -22 211 -123 344 -52 69 -71 82 -61 39 9 -34 10 -35 -47 42 -51 70 -117 108 -202 119 l-50 7 60 -40z"/><path d="M4687 5279 c-21 -17 -45 -45 -53 -62 l-17 -31 26 17 c33 21 116 54 182 72 49 13 49 14 14 14 -20 1 -56 -6 -79 -14 -55 -19 -55 -19 -36 10 22 34 8 31 -37 -6z"/><path d="M3079 5215 c30 -14 51 -28 48 -31 -3 -3 -36 -1 -74 4 -111 17 -256 24 -248 12 3 -5 23 -10 44 -10 20 0 71 -9 112 -20 86 -23 92 -23 84 -10 -6 9 72 17 100 10 6 -1 39 -9 75 -16 36 -7 76 -16 90 -19 55 -13 -114 66 -182 85 -97 27 -114 25 -49 -5z"/><path d="M2705 5195 c6 -2 37 -11 70 -19 60 -15 60 -15 35 4 -17 13 -40 19 -70 19 -25 0 -40 -2 -35 -4z"/><path d="M3339 5165 c93 -45 148 -85 185 -135 35 -47 46 -50 46 -12 0 55 -92 126 -209 162 -95 30 -104 24 -22 -15z"/><path d="M4841 5179 c-64 -12 -73 -19 -22 -16 l43 3 -38 -34 -39 -33 38 6 c20 3 53 8 73 11 46 7 164 -5 164 -17 0 -5 -8 -9 -17 -9 -12 0 -14 -3 -6 -11 8 -8 27 -7 69 3 l58 15 -73 16 c-40 10 -92 17 -115 18 -22 0 -50 4 -61 9 -18 7 -17 9 10 19 70 26 72 30 15 29 -30 0 -75 -4 -99 -9z"/><path d="M2513 5066 c-45 -11 -159 -73 -151 -82 2 -2 27 9 56 23 28 14 80 36 114 49 69 25 62 29 -19 10z"/><path d="M5024 5052 c4 -7 19 -12 34 -13 21 -1 16 -4 -19 -13 -25 -7 -54 -18 -65 -24 -24 -14 137 -6 236 12 l65 12 -55 13 c-83 19 -205 27 -196 13z"/><path d="M2478 4971 c-31 -10 -76 -33 -99 -50 -52 -38 -45 -39 24 -5 29 15 81 37 117 50 78 27 42 32 -42 5z"/><path d="M5060 4949 c156 -31 180 -41 137 -53 -22 -7 -22 -7 -1 -15 11 -5 56 -15 100 -21 43 -7 88 -17 99 -22 11 -5 4 5 -15 22 -72 63 -183 100 -295 99 -69 -1 -69 -1 -25 -10z"/><path d="M5160 4817 c93 -34 154 -67 241 -129 42 -30 82 -59 90 -63 26 -15 -35 47 -75 76 -21 16 -36 29 -32 29 14 0 -87 72 -119 86 -18 7 -63 16 -101 19 l-69 5 65 -23z"/><path d="M2268 4754 c-70 -16 -173 -67 -210 -102 -57 -53 -20 -59 43 -6 53 45 105 71 194 100 77 25 62 30 -27 8z"/><path d="M5220 4662 c58 -59 120 -129 139 -155 l33 -48 -38 16 c-158 68 -195 73 -68 11 96 -47 192 -111 176 -117 -7 -3 -5 -12 4 -23 11 -16 17 -17 26 -8 9 9 9 12 -1 12 -7 0 -9 5 -6 10 4 6 12 4 21 -5 9 -8 20 -15 26 -15 5 0 -9 16 -32 35 -23 19 -38 35 -34 35 5 0 -1 7 -13 15 -11 8 -46 53 -77 99 -59 88 -156 186 -223 223 -31 17 -17 0 67 -85z"/><path d="M3246 4626 c4 -10 -13 -14 -74 -18 -78 -6 -169 -36 -192 -64 -7 -7 6 -5 30 7 24 12 59 23 79 25 40 5 42 7 -54 -37 -22 -10 -56 -32 -75 -49 -24 -21 -28 -27 -12 -20 50 24 38 3 -25 -45 -36 -27 -82 -70 -102 -95 l-36 -45 43 34 c23 18 42 30 42 26 0 -12 -110 -167 -164 -230 -44 -52 -46 -56 -16 -33 75 60 90 69 90 58 0 -42 -77 -101 -181 -140 -31 -11 -74 -36 -95 -55 l-39 -35 45 19 c52 21 100 34 100 26 0 -3 -19 -14 -42 -24 -44 -19 -193 -130 -185 -137 2 -3 24 7 48 21 67 38 66 30 -3 -27 -72 -59 -184 -173 -200 -203 -6 -11 19 9 57 43 72 68 132 115 178 138 41 22 33 10 -15 -21 -62 -41 -172 -150 -229 -226 -27 -37 -49 -69 -49 -72 0 -3 22 15 48 41 47 45 155 112 183 112 7 0 -14 -16 -46 -36 -57 -34 -226 -194 -205 -194 5 0 0 -16 -11 -35 -28 -47 -18 -44 14 4 18 27 36 41 59 46 18 4 50 18 71 32 41 26 87 46 87 38 0 -3 -12 -10 -26 -16 -50 -18 -19 -18 36 1 30 11 80 19 110 19 l55 -1 -62 -14 c-70 -15 -126 -41 -190 -88 -58 -43 -54 -50 10 -15 62 34 177 62 238 57 49 -4 41 -7 -63 -26 -60 -11 -166 -59 -208 -94 l-25 -20 30 17 c20 11 11 0 -25 -34 l-55 -51 68 30 c99 44 171 60 267 59 l85 -1 -90 -14 c-110 -17 -159 -33 -241 -79 -69 -39 -99 -68 -37 -37 21 11 57 23 78 27 l40 7 -41 -22 c-43 -22 -128 -90 -121 -96 2 -3 30 11 62 31 63 38 155 75 183 75 9 -1 -12 -16 -48 -35 -69 -35 -155 -106 -192 -158 -21 -30 -19 -29 42 15 114 80 238 129 321 127 25 -1 15 -5 -32 -14 -36 -7 -97 -29 -136 -49 -68 -34 -203 -133 -233 -172 -15 -18 -14 -18 15 1 189 121 304 162 530 185 61 6 130 16 155 22 65 15 161 63 190 93 l24 26 -44 -19 c-25 -11 -58 -22 -75 -26 l-30 -6 25 18 c37 25 151 125 184 160 l29 31 -52 -19 c-28 -11 -51 -18 -51 -15 0 2 26 22 58 44 62 43 163 141 145 141 -7 0 -15 -5 -18 -10 -7 -11 -105 -70 -118 -70 -4 0 35 43 87 94 99 99 162 185 236 321 24 44 66 113 93 153 l49 74 -27 60 c-27 59 -27 65 -20 179 10 171 -16 244 -102 288 -27 14 -27 14 -8 -32 22 -52 19 -55 -17 -20 -57 55 -197 108 -182 69z m61 -395 c32 -20 86 -90 103 -135 8 -23 5 -31 -33 -70 -81 -84 -173 -83 -259 4 -27 26 -48 56 -48 67 0 24 72 108 115 134 39 24 82 24 122 0z"/><path d="M3178 4187 c-14 -12 -34 -37 -43 -55 -15 -31 -15 -35 5 -68 44 -70 125 -85 185 -33 39 34 44 63 20 109 -36 69 -115 91 -167 47z m97 -48 c14 -43 -45 -66 -61 -24 -8 19 13 45 37 45 10 0 21 -10 24 -21z"/><path d="M1700 4536 c-91 -81 -228 -235 -230 -259 0 -11 46 22 107 78 28 25 54 45 57 45 12 0 -36 -84 -80 -142 -24 -31 -63 -72 -86 -92 -24 -20 -38 -36 -32 -36 28 0 152 120 206 200 49 72 176 301 166 299 -2 0 -50 -42 -108 -93z"/><path d="M2065 4597 c-64 -24 -171 -82 -181 -98 -3 -6 21 3 55 20 73 37 200 81 235 81 14 0 28 5 31 10 11 18 -78 10 -140 -13z"/><path d="M4570 4545 c-22 -23 -25 -24 -31 -8 -5 15 -7 15 -20 -7 -8 -16 -16 -75 -19 -160 -6 -120 -9 -141 -33 -187 -45 -87 -38 -108 86 -260 125 -154 199 -308 236 -493 41 -206 52 -246 79 -295 15 -27 32 -50 37 -50 6 0 28 -13 50 -27 40 -27 115 -62 115 -54 0 2 -22 20 -50 40 -27 20 -50 40 -50 45 0 4 26 0 58 -10 240 -76 280 -84 200 -43 -16 8 -28 17 -26 20 7 6 147 -44 186 -66 54 -32 48 -17 -10 25 l-53 37 50 -6 c28 -3 85 -24 127 -45 43 -21 75 -33 71 -27 -20 34 -95 125 -115 140 -22 16 -22 16 9 1 18 -8 48 -31 68 -50 19 -19 31 -27 28 -18 -14 38 -59 86 -107 115 -50 29 -50 30 -16 24 19 -4 53 -16 75 -27 l40 -21 -20 22 c-11 13 -33 32 -50 42 -27 18 -28 19 -5 13 14 -4 38 -14 53 -22 16 -8 31 -13 33 -10 7 7 -82 76 -118 92 -18 8 -26 14 -18 14 18 1 85 -31 118 -55 l23 -17 -21 36 c-23 38 -47 59 -122 103 -48 28 -18 24 46 -7 22 -10 41 -17 43 -15 8 8 -82 75 -108 81 -45 10 -47 27 -2 19 49 -9 104 -36 148 -75 l35 -31 -10 26 c-19 50 -32 71 -74 115 -38 41 -39 43 -9 22 18 -12 35 -26 38 -31 3 -6 16 -15 28 -21 l22 -12 -20 24 c-10 13 -35 42 -55 63 l-35 39 35 -23 c28 -19 24 -11 -25 40 -53 56 -55 60 -20 35 l40 -29 -44 50 c-24 27 -60 64 -80 83 -30 27 -31 30 -8 17 15 -9 39 -23 55 -32 15 -9 -9 19 -53 62 -63 62 -72 74 -42 56 49 -29 39 -12 -18 29 -52 38 -53 45 -2 24 20 -8 39 -15 43 -15 16 0 -24 33 -80 67 -113 67 -138 100 -176 238 -34 123 -84 204 -160 260 -34 25 -34 26 -7 20 15 -4 27 -5 27 -1 0 11 -99 56 -140 62 -27 4 -37 10 -29 15 10 6 5 11 -14 18 -16 6 -33 11 -38 11 -6 0 -8 4 -5 9 11 17 -51 22 -93 7 -36 -12 -42 -12 -37 0 8 22 -8 16 -34 -11z m242 -366 c29 -21 88 -105 88 -126 0 -25 -52 -84 -91 -104 -43 -21 -99 -25 -132 -8 -39 20 -97 82 -97 104 0 29 51 107 86 132 51 36 95 37 146 2z"/><path d="M4679 4143 c-17 -15 -38 -42 -46 -61 -12 -30 -12 -37 2 -58 23 -36 64 -59 106 -59 30 0 46 8 74 35 19 19 35 42 35 52 0 28 -26 74 -56 97 -36 29 -76 26 -115 -6z m96 -52 c0 -34 -30 -51 -51 -29 -25 24 -10 60 24 56 21 -2 27 -8 27 -27z"/><path d="M2072 4499 c-29 -17 -76 -53 -105 -79 -59 -54 -141 -166 -132 -181 4 -5 0 -9 -7 -9 -7 -1 -23 -16 -35 -35 -17 -28 -19 -35 -7 -39 16 -6 54 13 54 27 0 4 -9 3 -19 -3 -71 -37 16 42 148 136 58 41 101 74 96 74 -12 0 -165 -101 -165 -109 0 -3 -9 -12 -21 -19 -19 -12 -19 -11 3 19 58 82 112 138 196 201 45 35 59 49 50 48 -2 0 -27 -14 -56 -31z"/><path d="M5711 4394 c130 -64 269 -153 292 -187 14 -22 14 -22 -41 5 -80 41 -94 34 -25 -11 57 -39 150 -129 205 -201 l27 -35 1 43 c0 27 -10 62 -26 95 -31 61 -146 178 -221 227 -29 18 -52 35 -50 36 2 2 31 -6 66 -16 116 -36 120 -21 6 21 -146 54 -239 79 -299 79 l-49 0 114 -56z"/><path d="M5495 4329 c-8 -12 13 -30 70 -58 57 -29 197 -82 202 -77 3 2 -33 22 -79 44 -46 21 -94 49 -107 61 -13 11 -28 22 -33 22 -19 3 -24 5 -35 12 -6 4 -15 2 -18 -4z"/><path d="M1959 4279 c-58 -41 -72 -57 -31 -33 36 21 90 63 81 64 -3 0 -26 -14 -50 -31z"/><path d="M5490 4276 c0 -10 73 -46 82 -40 6 4 8 3 5 -3 -3 -5 71 -54 165 -109 218 -127 335 -203 373 -243 28 -30 24 -29 -75 23 -106 54 -260 111 -282 104 -7 -3 14 -21 47 -42 77 -49 138 -107 182 -175 19 -30 58 -79 86 -109 57 -60 30 -55 -31 6 -92 91 -142 134 -142 120 0 -23 62 -110 81 -115 10 -3 37 -31 61 -62 23 -31 74 -90 113 -131 79 -84 107 -121 124 -165 10 -26 10 -23 6 30 -13 144 -73 290 -165 402 -33 40 -58 73 -56 73 2 0 32 -13 67 -29 35 -17 77 -33 93 -37 l29 -7 -20 29 c-11 16 -40 61 -64 99 -92 147 -251 276 -355 290 -34 4 -30 1 48 -53 85 -57 200 -152 185 -152 -5 0 -27 13 -50 28 -50 34 -194 115 -292 165 -38 19 -81 44 -94 56 -13 12 -33 21 -43 21 -10 0 -32 7 -48 15 -17 9 -30 14 -30 11z"/><path d="M1705 4105 c-38 -25 -125 -70 -192 -102 -68 -31 -121 -59 -119 -61 8 -7 192 71 257 109 36 21 69 39 73 39 4 0 -4 -15 -18 -33 -15 -19 -26 -38 -26 -42 0 -5 13 9 29 31 16 21 28 40 26 42 -2 2 11 17 28 33 46 41 22 35 -58 -16z"/><path d="M1460 4069 c-51 -34 -121 -89 -156 -122 -66 -61 -129 -135 -123 -142 9 -8 189 137 284 228 55 53 97 96 93 97 -4 0 -48 -28 -98 -61z"/><path d="M5142 4108 c15 -13 83 -45 150 -72 161 -64 298 -132 331 -162 14 -13 28 -24 31 -24 9 0 67 -60 59 -60 -4 -1 3 -10 16 -20 13 -11 33 -19 45 -19 19 1 19 2 2 6 -15 4 -16 7 -5 15 10 7 8 8 -10 5 -20 -5 -22 -3 -18 19 4 22 -3 29 -26 25 -5 -1 -6 3 -2 9 3 5 -1 13 -9 16 -9 3 -13 10 -10 15 3 5 -2 9 -10 9 -9 0 -16 4 -16 9 0 5 -8 12 -18 15 -10 4 -27 14 -38 24 -26 24 -105 61 -249 116 -66 26 -142 56 -170 67 -77 32 -82 32 -53 7z"/><path d="M1767 4048 c-94 -94 -253 -280 -316 -369 -36 -51 -36 -76 0 -43 16 15 235 280 372 451 34 42 7 24 -56 -39z"/><path d="M4190 4065 c15 -18 -1 -21 -31 -5 -23 13 -142 2 -133 -11 3 -5 17 -10 32 -10 15 -1 -13 -6 -63 -10 -152 -14 -169 -30 -26 -24 71 3 128 10 131 16 5 7 38 7 109 0 127 -13 124 -13 115 0 -9 15 -104 59 -128 59 -15 0 -16 -3 -6 -15z"/><path d="M4204 3981 c5 -7 -3 -11 -23 -11 -17 0 -31 -4 -31 -9 0 -4 -22 -11 -49 -14 -28 -3 -85 -24 -130 -47 -83 -41 -111 -63 -43 -34 20 9 66 25 102 36 87 26 239 21 324 -10 l59 -22 -28 30 c-43 45 -202 116 -181 81z"/><path d="M5635 3779 c41 -30 167 -160 233 -242 30 -37 57 -66 59 -63 4 4 -37 75 -58 100 -48 58 -49 60 -37 68 9 5 5 8 -12 9 l-25 1 25 8 25 8 -28 1 c-17 1 -40 14 -61 34 -43 44 -86 74 -122 87 l-29 10 30 -21z"/><path d="M5768 3733 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/><path d="M5788 3713 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/><path d="M5790 3696 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/><path d="M5730 3492 c0 -2 21 -37 46 -79 45 -74 140 -259 187 -364 14 -30 54 -98 91 -152 52 -77 67 -95 73 -81 9 25 -23 176 -53 249 -38 91 -38 92 -10 60 31 -35 83 -121 109 -180 l18 -40 -6 65 c-19 209 -26 252 -45 289 -25 51 -71 86 -146 111 -32 11 -76 34 -96 51 -21 16 -38 27 -38 24 0 -3 44 -52 98 -109 53 -56 108 -122 121 -147 24 -42 20 -39 -79 51 -57 52 -142 131 -187 176 -46 44 -83 79 -83 76z"/><path d="M6060 3471 c0 -6 34 -61 77 -123 80 -119 120 -196 133 -263 7 -35 8 -30 9 35 1 109 -18 144 -165 303 -30 32 -54 53 -54 48z"/><path d="M1752 3364 c-48 -33 -111 -89 -150 -133 -37 -42 -74 -81 -82 -88 -29 -23 -1 -13 59 22 71 42 212 98 331 132 47 13 92 27 100 30 8 3 17 7 20 8 31 8 49 18 54 30 7 20 -3 19 -26 -2 -10 -9 -18 -12 -18 -6 0 6 -25 2 -57 -10 -32 -10 -67 -19 -77 -19 -10 1 -32 -6 -49 -14 l-30 -16 34 47 c18 26 37 49 41 51 5 3 8 10 8 16 0 5 -23 -11 -52 -37 -28 -25 -64 -55 -81 -67 l-29 -21 15 29 c8 16 25 38 37 49 20 18 45 55 37 55 -2 0 -40 -25 -85 -56z"/><path d="M2111 3379 c-25 -24 -24 -31 5 -23 11 3 20 14 21 25 2 24 2 24 -26 -2z"/><path d="M1851 3088 c-67 -10 -182 -66 -235 -113 -46 -41 -41 -44 18 -10 58 34 140 62 269 90 142 32 164 45 72 43 -38 -1 -94 -6 -124 -10z m19 -18 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z"/><path d="M2549 3016 c-43 -11 -125 -56 -104 -56 6 0 33 7 60 15 28 9 89 18 138 22 92 6 111 16 50 27 -54 8 -91 6 -144 -8z"/><path d="M2948 2893 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/><path d="M5866 2836 c85 -29 159 -77 196 -129 l21 -30 -25 17 c-18 12 -52 17 -126 19 -56 1 -102 1 -102 0 0 -1 21 -17 48 -34 72 -50 151 -120 183 -163 16 -22 29 -35 29 -29 0 21 -24 79 -46 112 -13 19 -22 37 -20 39 8 8 70 -31 113 -71 l46 -42 -8 35 c-30 141 -167 270 -300 284 l-50 6 41 -14z"/><path d="M4665 2720 c-17 -4 5 -5 50 -2 44 2 82 6 84 8 8 7 -104 2 -134 -6z"/><path d="M1818 2686 c-83 -24 -163 -68 -230 -127 l-43 -37 90 44 c63 31 141 57 260 88 125 31 163 44 145 49 -49 13 -146 6 -222 -17z"/><path d="M5360 2530 c36 -11 108 -28 160 -39 52 -11 108 -25 124 -31 43 -16 43 -5 -1 24 -51 34 -137 55 -252 61 l-96 5 65 -20z"/><path d="M4448 1953 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/></g></svg><p class="greetingsMessageTM__text">Hi all!</p>`,
};

const callbacks = {
  greetingsButton(e) {
    const wave = ElementFactory.createElement('span', 'wave');
    this.querySelectorAll('.wave').forEach(function (wave) {
      wave.remove();
    });
    this.appendChild(wave);
    const maxDim = Math.max(this.offsetWidth, this.offsetHeight);
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - maxDim / 2;
    const y = e.clientY - rect.top - maxDim / 2;
    wave.style.width = wave.style.height = maxDim + 'px';
    wave.style.left = x + 'px';
    wave.style.top = y + 'px';
    wave.style.animation = 'wave-animate 0.3s linear';
    setTimeout(() => {
      const greetingsButton = document.querySelector('.greetingsButtonTM');
      greetingsButton.classList.add('disable');
      setTimeout(() => {
        const greetingsButton = document.querySelector('.greetingsButtonTM');
        const greetingsButtonWrapper = document.querySelector(
          '.greetingsButtonTM__wrapper'
        );
        greetingsButton.remove();
        greetingsButtonWrapper.classList.add('message');
        setTimeout(() => {
          const overlay = ElementFactory.createElement(
            'div',
            'greetingsButtonTM__overlay'
          );
          const greetingsMessage = ElementFactory.createElement(
            'div',
            'greetingsMessageTM',
            dialogParameters.greetingsMessage
          );
          const greetingsButtonWrapper = document.querySelector(
            '.greetingsButtonTM__wrapper'
          );
          ElementDistributor.init('body', 'start', overlay);
          greetingsButtonWrapper.append(greetingsMessage);
        }, 200);
      }, 250);
    }, 150);
  },
  closeButton() {
    const greetingsButtonWrapper = document.querySelector(
      '.greetingsButtonTM__wrapper'
    );
    greetingsButtonWrapper.classList.add('disable');
    setTimeout(() => {
      const greetingsButtonWrapper = document.querySelector(
        '.greetingsButtonTM__wrapper'
      );
      const overlay = document.querySelector('.greetingsButtonTM__overlay');
      greetingsButtonWrapper.remove();
      overlay.remove();
    }, 200);
  },
};

class App {
  static init() {
    const data = DataService.getData();
    StylesCreator.init();
    const dialogWrapper = ElementFactory.createElement(
      'div',
      'greetingsButtonTM__wrapper'
    );
    const greetingsButton = ElementFactory.createElement(
      'button',
      'greetingsButtonTM',
      dialogParameters.buttonIcon,
      { event: 'click', callback: callbacks.greetingsButton }
    );
    const closeButton = ElementFactory.createElement(
      'button',
      'greetingsButtonTM__closeButton',
      dialogParameters.closeButton,
      { event: 'click', callback: callbacks.closeButton }
    );
    dialogWrapper.append(closeButton);
    dialogWrapper.append(greetingsButton);
    ElementDistributor.init('body', 'start', dialogWrapper);
  }
}

App.init();
