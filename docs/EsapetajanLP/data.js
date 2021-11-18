var APP_DATA = {
  "scenes": [
    {
      "id": "0-polku",
      "name": "Polku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.0046546668338312,
        "pitch": -0.11584036806872078,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8548311861545557,
          "pitch": 0.05110501943554446,
          "rotation": 0,
          "target": "1-esapetj"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2636173914450701,
          "pitch": 0.10471392367833232,
          "title": "Polku",
          "text": "Luontopolun pituus on 0,5 km. Sillä on helppo kävellä ja se on hyvin merkitty."
        }
      ]
    },
    {
      "id": "1-esapetj",
      "name": "Esapetäjä",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3513798440800251,
        "pitch": -0.7507924971941069,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6318882123459488,
          "pitch": 0.09041421494709567,
          "rotation": 0,
          "target": "0-polku"
        },
        {
          "yaw": 0.10440647626993282,
          "pitch": 0.08604892614198256,
          "rotation": 0,
          "target": "2-lhell"
        },
        {
          "yaw": 0.6527983342471231,
          "pitch": -0.05318700086095873,
          "rotation": 0,
          "target": "3-ymprist"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.814228469049521,
          "pitch": 0.00024911470082500387,
          "title": "Esanpetäjä",
          "text": "Vanha petäjä on rauhoitettu luonnonsuojelulain nojalla."
        }
      ]
    },
    {
      "id": "2-lhell",
      "name": "Lähellä",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.4370208096622328,
        "pitch": -0.06620215993352296,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.307841490866668,
          "pitch": 0.6313889289304839,
          "rotation": 9.42477796076938,
          "target": "1-esapetj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ymprist",
      "name": "Ympäristö",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.1101331208449956,
        "pitch": -0.11725205596330746,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17720498863387135,
          "pitch": 0.24337801493092215,
          "rotation": 0,
          "target": "1-esapetj"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4888070094091734,
          "pitch": -0.01159422148999667,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Muurahaiset</p>",
          "text": "Muurahaiset ovat tässä.&nbsp;"
        }
      ]
    }
  ],
  "name": "Esapetäjän luontopolku",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
