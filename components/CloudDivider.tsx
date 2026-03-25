interface CloudDividerProps {
  fill: string
  height?: number
  flip?: boolean
}

export default function CloudDivider({ fill, height = 110, flip = false }: CloudDividerProps) {
  return (
    <div
      className="w-full pointer-events-none overflow-hidden leading-none"
      style={{ height, transform: flip ? 'scaleY(-1)' : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/*
          Three overlapping cloud layers for depth.
          Bottom layer fills solid, top two layers add fluffy bumps.
        */}

        {/* Base fill */}
        <rect y="70" width="1440" height="40" fill={fill} />

        {/* Cloud layer 1 — large, dominant bumps */}
        <path
          d="
            M-10,110
            L-10,82
            C30,82 40,52 80,52
            C120,52 128,75 170,72
            C212,69 222,38 275,38
            C328,38 336,72 385,70
            C434,68 445,45 500,45
            C555,45 563,78 610,76
            C657,74 668,35 730,35
            C792,35 800,76 850,74
            C900,72 910,50 970,50
            C1030,50 1038,80 1085,78
            C1132,76 1143,42 1205,42
            C1267,42 1275,75 1320,73
            C1365,71 1395,52 1450,55
            L1450,110 Z
          "
          fill={fill}
        />

        {/* Cloud layer 2 — smaller secondary bumps for fluffiness */}
        <path
          d="
            M-10,110
            L-10,90
            C20,90 35,68 65,68
            C95,68 108,88 140,86
            C172,84 185,65 220,65
            C255,65 265,88 300,86
            C335,84 345,70 385,70
            C425,70 430,90 465,88
            C500,86 510,65 550,65
            C590,65 598,88 635,86
            C672,84 682,62 725,62
            C768,62 775,86 815,84
            C855,82 865,65 905,65
            C945,65 952,88 990,86
            C1028,84 1038,65 1080,65
            C1122,65 1130,88 1168,86
            C1206,84 1218,68 1260,68
            C1302,68 1360,90 1450,88
            L1450,110 Z
          "
          fill={fill}
          opacity="0.7"
        />
      </svg>
    </div>
  )
}
