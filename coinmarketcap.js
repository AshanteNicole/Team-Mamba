// Sample API return from https://coinmarketcap.com/

var coinMarketCapData =
  {
    "data": {
      "1": {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "website_slug": "bitcoin",
        "rank": 1,
        "circulating_supply": 17277412.0,
        "total_supply": 17277412.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 6414.65910372,
            "volume_24h": 4327438581.76668,
            "market_cap": 110828708175.0,
            "percent_change_1h": 0.02,
            "percent_change_24h": 0.85,
            "percent_change_7d": -0.02
          }
        },
        "last_updated": 1537419562
      },
      "1027": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "website_slug": "ethereum",
        "rank": 2,
        "circulating_supply": 102068506.0,
        "total_supply": 102068506.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 208.011603612,
            "volume_24h": 1688099337.6297,
            "market_cap": 21231433624.0,
            "percent_change_1h": -0.77,
            "percent_change_24h": -1.85,
            "percent_change_7d": 10.02
          }
        },
        "last_updated": 1537419574
      },
      "52": {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "website_slug": "ripple",
        "rank": 3,
        "circulating_supply": 39809069106.0,
        "total_supply": 99991841593.0,
        "max_supply": 100000000000.0,
        "quotes": {
          "USD": {
            "price": 0.3246255398,
            "volume_24h": 436493954.974382,
            "market_cap": 12923040549.0,
            "percent_change_1h": -0.05,
            "percent_change_24h": -1.74,
            "percent_change_7d": 19.44
          }
        },
        "last_updated": 1537419612
      },
      "1831": {
        "id": 1831,
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "website_slug": "bitcoin-cash",
        "rank": 4,
        "circulating_supply": 17358075.0,
        "total_supply": 17358075.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 425.910462484,
            "volume_24h": 328252046.258793,
            "market_cap": 7392985751.0,
            "percent_change_1h": -0.26,
            "percent_change_24h": -2.41,
            "percent_change_7d": -2.75
          }
        },
        "last_updated": 1537419571
      },
      "1765": {
        "id": 1765,
        "name": "EOS",
        "symbol": "EOS",
        "website_slug": "eos",
        "rank": 5,
        "circulating_supply": 906245118.0,
        "total_supply": 1006245120.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 5.2245264403,
            "volume_24h": 626442891.10201,
            "market_cap": 4734701578.0,
            "percent_change_1h": -0.16,
            "percent_change_24h": 1.92,
            "percent_change_7d": 4.76
          }
        },
        "last_updated": 1537419571
      },
      "512": {
        "id": 512,
        "name": "Stellar",
        "symbol": "XLM",
        "website_slug": "stellar",
        "rank": 6,
        "circulating_supply": 18785412663.0,
        "total_supply": 104303927518.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.206658971,
            "volume_24h": 47882267.979981,
            "market_cap": 3882174051.0,
            "percent_change_1h": -0.07,
            "percent_change_24h": -0.72,
            "percent_change_7d": 2.06
          }
        },
        "last_updated": 1537419561
      },
      "2": {
        "id": 2,
        "name": "Litecoin",
        "symbol": "LTC",
        "website_slug": "litecoin",
        "rank": 7,
        "circulating_supply": 58368031.0,
        "total_supply": 58368031.0,
        "max_supply": 84000000.0,
        "quotes": {
          "USD": {
            "price": 53.9406590135,
            "volume_24h": 281901259.787314,
            "market_cap": 3148410074.0,
            "percent_change_1h": -0.06,
            "percent_change_24h": -0.59,
            "percent_change_7d": 2.19
          }
        },
        "last_updated": 1537419610
      },
      "825": {
        "id": 825,
        "name": "Tether",
        "symbol": "USDT",
        "website_slug": "tether",
        "rank": 8,
        "circulating_supply": 2756421736.0,
        "total_supply": 3080109502.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.0034425406,
            "volume_24h": 2583465247.96581,
            "market_cap": 2765910829.0,
            "percent_change_1h": 0.17,
            "percent_change_24h": 0.21,
            "percent_change_7d": 0.23
          }
        },
        "last_updated": 1537419569
      },
      "2010": {
        "id": 2010,
        "name": "Cardano",
        "symbol": "ADA",
        "website_slug": "cardano",
        "rank": 9,
        "circulating_supply": 25927070538.0,
        "total_supply": 31112483745.0,
        "max_supply": 45000000000.0,
        "quotes": {
          "USD": {
            "price": 0.0721204985,
            "volume_24h": 100452464.937996,
            "market_cap": 1869873253.0,
            "percent_change_1h": -0.58,
            "percent_change_24h": 4.07,
            "percent_change_7d": 7.51
          }
        },
        "last_updated": 1537419570
      },
      "328": {
        "id": 328,
        "name": "Monero",
        "symbol": "XMR",
        "website_slug": "monero",
        "rank": 10,
        "circulating_supply": 16421341.0,
        "total_supply": 16421341.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 112.04642771,
            "volume_24h": 37773537.5029003,
            "market_cap": 1839952645.0,
            "percent_change_1h": 0.02,
            "percent_change_24h": 0.65,
            "percent_change_7d": 4.91
          }
        },
        "last_updated": 1537419558
      },
      "131": {
        "id": 131,
        "name": "Dash",
        "symbol": "DASH",
        "website_slug": "dash",
        "rank": 11,
        "circulating_supply": 8330194.0,
        "total_supply": 8330194.0,
        "max_supply": 18900000.0,
        "quotes": {
          "USD": {
            "price": 191.4775695,
            "volume_24h": 180737070.898466,
            "market_cap": 1595045275.0,
            "percent_change_1h": 0.19,
            "percent_change_24h": -0.15,
            "percent_change_7d": 3.19
          }
        },
        "last_updated": 1537419547
      },
      "1720": {
        "id": 1720,
        "name": "IOTA",
        "symbol": "MIOTA",
        "website_slug": "iota",
        "rank": 12,
        "circulating_supply": 2779530283.0,
        "total_supply": 2779530283.0,
        "max_supply": 2779530283.0,
        "quotes": {
          "USD": {
            "price": 0.5294562593,
            "volume_24h": 28268111.110726,
            "market_cap": 1471639706.0,
            "percent_change_1h": -0.72,
            "percent_change_24h": -1.19,
            "percent_change_7d": -5.56
          }
        },
        "last_updated": 1537419573
      },
      "1958": {
        "id": 1958,
        "name": "TRON",
        "symbol": "TRX",
        "website_slug": "tron",
        "rank": 13,
        "circulating_supply": 65748111645.0,
        "total_supply": 99000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0199294794,
            "volume_24h": 108443833.668339,
            "market_cap": 1310325637.0,
            "percent_change_1h": 0.43,
            "percent_change_24h": 1.11,
            "percent_change_7d": 6.08
          }
        },
        "last_updated": 1537419564
      },
      "1321": {
        "id": 1321,
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "website_slug": "ethereum-classic",
        "rank": 14,
        "circulating_supply": 104673082.0,
        "total_supply": 104673082.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 10.7867058308,
            "volume_24h": 179717261.829456,
            "market_cap": 1129077744.0,
            "percent_change_1h": 0.06,
            "percent_change_24h": 1.44,
            "percent_change_7d": -0.54
          }
        },
        "last_updated": 1537419570
      },
      "1376": {
        "id": 1376,
        "name": "NEO",
        "symbol": "NEO",
        "website_slug": "neo",
        "rank": 15,
        "circulating_supply": 65000000.0,
        "total_supply": 100000000.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 17.1947381947,
            "volume_24h": 49400759.491483,
            "market_cap": 1117657983.0,
            "percent_change_1h": 0.07,
            "percent_change_24h": -0.52,
            "percent_change_7d": -4.56
          }
        },
        "last_updated": 1537419567
      },
      "2011": {
        "id": 2011,
        "name": "Tezos",
        "symbol": "XTZ",
        "website_slug": "tezos",
        "rank": 16,
        "circulating_supply": 607489041.0,
        "total_supply": 763306930.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.5142805329,
            "volume_24h": 3364895.868176,
            "market_cap": 919908829.0,
            "percent_change_1h": 0.48,
            "percent_change_24h": 0.52,
            "percent_change_7d": 18.04
          }
        },
        "last_updated": 1537419572
      },
      "1839": {
        "id": 1839,
        "name": "Binance Coin",
        "symbol": "BNB",
        "website_slug": "binance-coin",
        "rank": 17,
        "circulating_supply": 95512523.0,
        "total_supply": 192443301.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 9.6269684347,
            "volume_24h": 21860476.8913789,
            "market_cap": 919496045.0,
            "percent_change_1h": -0.11,
            "percent_change_24h": -0.18,
            "percent_change_7d": 2.49
          }
        },
        "last_updated": 1537419570
      },
      "873": {
        "id": 873,
        "name": "NEM",
        "symbol": "XEM",
        "website_slug": "nem",
        "rank": 18,
        "circulating_supply": 8999999999.0,
        "total_supply": 8999999999.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0856252197,
            "volume_24h": 10771095.9325626,
            "market_cap": 770626978.0,
            "percent_change_1h": 0.11,
            "percent_change_24h": -2.96,
            "percent_change_7d": -3.14
          }
        },
        "last_updated": 1537419567
      },
      "3077": {
        "id": 3077,
        "name": "VeChain",
        "symbol": "VET",
        "website_slug": "vechain",
        "rank": 19,
        "circulating_supply": 55454734800.0,
        "total_supply": 86712634466.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0132349805,
            "volume_24h": 17145882.4898303,
            "market_cap": 733942333.0,
            "percent_change_1h": 0.16,
            "percent_change_24h": 1.97,
            "percent_change_7d": -4.12
          }
        },
        "last_updated": 1537419587
      },
      "74": {
        "id": 74,
        "name": "Dogecoin",
        "symbol": "DOGE",
        "website_slug": "dogecoin",
        "rank": 20,
        "circulating_supply": 116211295290.0,
        "total_supply": 116211295290.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0057459029,
            "volume_24h": 43251899.0304103,
            "market_cap": 667738817.0,
            "percent_change_1h": -2.36,
            "percent_change_24h": -3.4,
            "percent_change_7d": -12.17
          }
        },
        "last_updated": 1537419613
      },
      "1437": {
        "id": 1437,
        "name": "Zcash",
        "symbol": "ZEC",
        "website_slug": "zcash",
        "rank": 21,
        "circulating_supply": 4836394.0,
        "total_supply": 4836394.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 115.447550812,
            "volume_24h": 91248059.9992089,
            "market_cap": 558349813.0,
            "percent_change_1h": 1.23,
            "percent_change_24h": 1.89,
            "percent_change_7d": 2.72
          }
        },
        "last_updated": 1537419568
      },
      "1808": {
        "id": 1808,
        "name": "OmiseGO",
        "symbol": "OMG",
        "website_slug": "omisego",
        "rank": 22,
        "circulating_supply": 140245398.0,
        "total_supply": 140245398.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 3.184815176,
            "volume_24h": 21386654.5875068,
            "market_cap": 446655673.0,
            "percent_change_1h": -0.2,
            "percent_change_24h": 0.23,
            "percent_change_7d": -3.21
          }
        },
        "last_updated": 1537419567
      },
      "1214": {
        "id": 1214,
        "name": "Lisk",
        "symbol": "LSK",
        "website_slug": "lisk",
        "rank": 23,
        "circulating_supply": 110308586.0,
        "total_supply": 125547712.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 3.3473826097,
            "volume_24h": 5421450.79942698,
            "market_cap": 369245042.0,
            "percent_change_1h": -0.99,
            "percent_change_24h": -2.13,
            "percent_change_7d": -0.07
          }
        },
        "last_updated": 1537419564
      },
      "2083": {
        "id": 2083,
        "name": "Bitcoin Gold",
        "symbol": "BTG",
        "website_slug": "bitcoin-gold",
        "rank": 24,
        "circulating_supply": 17243574.0,
        "total_supply": 17343574.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 20.959803574,
            "volume_24h": 4811236.30599776,
            "market_cap": 361421915.0,
            "percent_change_1h": 0.25,
            "percent_change_24h": 0.57,
            "percent_change_7d": 9.39
          }
        },
        "last_updated": 1537419575
      },
      "372": {
        "id": 372,
        "name": "Bytecoin",
        "symbol": "BCN",
        "website_slug": "bytecoin-bcn",
        "rank": 25,
        "circulating_supply": 184059936041.0,
        "total_supply": 184059936041.0,
        "max_supply": 184470000000.0,
        "quotes": {
          "USD": {
            "price": 0.0018514428,
            "volume_24h": 2377827.01221594,
            "market_cap": 340776448.0,
            "percent_change_1h": -0.28,
            "percent_change_24h": -1.47,
            "percent_change_7d": -2.42
          }
        },
        "last_updated": 1537419557
      },
      "2566": {
        "id": 2566,
        "name": "Ontology",
        "symbol": "ONT",
        "website_slug": "ontology",
        "rank": 26,
        "circulating_supply": 184206203.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.7081645263,
            "volume_24h": 31526584.4418155,
            "market_cap": 314654501.0,
            "percent_change_1h": -0.16,
            "percent_change_24h": -1.55,
            "percent_change_7d": -3.84
          }
        },
        "last_updated": 1537419579
      },
      "463": {
        "id": 463,
        "name": "BitShares",
        "symbol": "BTS",
        "website_slug": "bitshares",
        "rank": 27,
        "circulating_supply": 2659500000.0,
        "total_supply": 2659500000.0,
        "max_supply": 3600570502.0,
        "quotes": {
          "USD": {
            "price": 0.1171431447,
            "volume_24h": 5352868.36102348,
            "market_cap": 311542193.0,
            "percent_change_1h": 1.2,
            "percent_change_24h": 2.41,
            "percent_change_7d": 17.44
          }
        },
        "last_updated": 1537419559
      },
      "1567": {
        "id": 1567,
        "name": "Nano",
        "symbol": "NANO",
        "website_slug": "nano",
        "rank": 28,
        "circulating_supply": 133248289.0,
        "total_supply": 133248289.0,
        "max_supply": 133248290.0,
        "quotes": {
          "USD": {
            "price": 2.3301410757,
            "volume_24h": 14137530.1063992,
            "market_cap": 310487312.0,
            "percent_change_1h": -0.1,
            "percent_change_24h": 0.83,
            "percent_change_7d": 11.79
          }
        },
        "last_updated": 1537419568
      },
      "1168": {
        "id": 1168,
        "name": "Decred",
        "symbol": "DCR",
        "website_slug": "decred",
        "rank": 29,
        "circulating_supply": 8498810.0,
        "total_supply": 8498810.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 36.0163295289,
            "volume_24h": 790001.476262056,
            "market_cap": 306095952.0,
            "percent_change_1h": -0.51,
            "percent_change_24h": -0.62,
            "percent_change_7d": 2.17
          }
        },
        "last_updated": 1537419565
      },
      "1684": {
        "id": 1684,
        "name": "Qtum",
        "symbol": "QTUM",
        "website_slug": "qtum",
        "rank": 30,
        "circulating_supply": 88902588.0,
        "total_supply": 100902588.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 3.3399334933,
            "volume_24h": 94480117.6634361,
            "market_cap": 296928731.0,
            "percent_change_1h": 0.12,
            "percent_change_24h": 2.09,
            "percent_change_7d": -1.5
          }
        },
        "last_updated": 1537419568
      },
      "1896": {
        "id": 1896,
        "name": "0x",
        "symbol": "ZRX",
        "website_slug": "0x",
        "rank": 31,
        "circulating_supply": 539681118.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.5333319046,
            "volume_24h": 7439181.70197791,
            "market_cap": 287829158.0,
            "percent_change_1h": -0.07,
            "percent_change_24h": 1.43,
            "percent_change_7d": 1.33
          }
        },
        "last_updated": 1537419573
      },
      "1518": {
        "id": 1518,
        "name": "Maker",
        "symbol": "MKR",
        "website_slug": "maker",
        "rank": 32,
        "circulating_supply": 728228.0,
        "total_supply": 1000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 393.711478542,
            "volume_24h": 667264.595465148,
            "market_cap": 286711632.0,
            "percent_change_1h": -0.21,
            "percent_change_24h": -10.19,
            "percent_change_7d": 20.07
          }
        },
        "last_updated": 1537419570
      },
      "109": {
        "id": 109,
        "name": "DigiByte",
        "symbol": "DGB",
        "website_slug": "digibyte",
        "rank": 33,
        "circulating_supply": 10817029340.0,
        "total_supply": 10817029340.0,
        "max_supply": 21000000000.0,
        "quotes": {
          "USD": {
            "price": 0.0253839308,
            "volume_24h": 4159054.97720481,
            "market_cap": 274578724.0,
            "percent_change_1h": -0.14,
            "percent_change_24h": 1.36,
            "percent_change_7d": 11.17
          }
        },
        "last_updated": 1537419612
      },
      "2222": {
        "id": 2222,
        "name": "Bitcoin Diamond",
        "symbol": "BCD",
        "website_slug": "bitcoin-diamond",
        "rank": 34,
        "circulating_supply": 153756875.0,
        "total_supply": 156756875.0,
        "max_supply": 210000000.0,
        "quotes": {
          "USD": {
            "price": 1.7586242405,
            "volume_24h": 2150071.5781526,
            "market_cap": 270400568.0,
            "percent_change_1h": 0.38,
            "percent_change_24h": -2.27,
            "percent_change_7d": -8.61
          }
        },
        "last_updated": 1537419574
      },
      "2469": {
        "id": 2469,
        "name": "Zilliqa",
        "symbol": "ZIL",
        "website_slug": "zilliqa",
        "rank": 35,
        "circulating_supply": 7780347516.0,
        "total_supply": 12600000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0329506396,
            "volume_24h": 6618114.57802905,
            "market_cap": 256367427.0,
            "percent_change_1h": -0.45,
            "percent_change_24h": -0.11,
            "percent_change_7d": 0.0
          }
        },
        "last_updated": 1537419573
      },
      "2099": {
        "id": 2099,
        "name": "ICON",
        "symbol": "ICX",
        "website_slug": "icon",
        "rank": 36,
        "circulating_supply": 387431340.0,
        "total_supply": 800460000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.5941740341,
            "volume_24h": 15790194.2215529,
            "market_cap": 230201642.0,
            "percent_change_1h": -0.27,
            "percent_change_24h": -1.67,
            "percent_change_7d": -2.87
          }
        },
        "last_updated": 1537419574
      },
      "1274": {
        "id": 1274,
        "name": "Waves",
        "symbol": "WAVES",
        "website_slug": "waves",
        "rank": 37,
        "circulating_supply": 100000000.0,
        "total_supply": 100000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 2.296098407,
            "volume_24h": 8882723.98547063,
            "market_cap": 229609841.0,
            "percent_change_1h": -0.6,
            "percent_change_24h": 0.15,
            "percent_change_7d": 0.73
          }
        },
        "last_updated": 1537419568
      },
      "1230": {
        "id": 1230,
        "name": "Steem",
        "symbol": "STEEM",
        "website_slug": "steem",
        "rank": 38,
        "circulating_supply": 279547461.0,
        "total_supply": 296521555.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.8184485625,
            "volume_24h": 2924431.72203356,
            "market_cap": 228795218.0,
            "percent_change_1h": 0.19,
            "percent_change_24h": 1.26,
            "percent_change_7d": 14.53
          }
        },
        "last_updated": 1537419568
      },
      "1700": {
        "id": 1700,
        "name": "Aeternity",
        "symbol": "AE",
        "website_slug": "aeternity",
        "rank": 39,
        "circulating_supply": 233020472.0,
        "total_supply": 273685830.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.9264070698,
            "volume_24h": 4606449.27134672,
            "market_cap": 215871813.0,
            "percent_change_1h": -0.41,
            "percent_change_24h": -1.36,
            "percent_change_7d": 4.39
          }
        },
        "last_updated": 1537419571
      },
      "693": {
        "id": 693,
        "name": "Verge",
        "symbol": "XVG",
        "website_slug": "verge",
        "rank": 40,
        "circulating_supply": 15172086051.0,
        "total_supply": 15172086051.0,
        "max_supply": 16555000000.0,
        "quotes": {
          "USD": {
            "price": 0.0136469926,
            "volume_24h": 4851681.56877822,
            "market_cap": 207053346.0,
            "percent_change_1h": 0.24,
            "percent_change_24h": 0.45,
            "percent_change_7d": 3.72
          }
        },
        "last_updated": 1537419561
      },
      "1042": {
        "id": 1042,
        "name": "Siacoin",
        "symbol": "SC",
        "website_slug": "siacoin",
        "rank": 41,
        "circulating_supply": 36938507247.0,
        "total_supply": 36938507247.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0053026343,
            "volume_24h": 2410006.97629421,
            "market_cap": 195871394.0,
            "percent_change_1h": -0.32,
            "percent_change_24h": 0.12,
            "percent_change_7d": 1.72
          }
        },
        "last_updated": 1537419566
      },
      "1866": {
        "id": 1866,
        "name": "Bytom",
        "symbol": "BTM",
        "website_slug": "bytom",
        "rank": 42,
        "circulating_supply": 1002499275.0,
        "total_supply": 1407000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.169160265,
            "volume_24h": 54766186.7297464,
            "market_cap": 169583043.0,
            "percent_change_1h": -0.4,
            "percent_change_24h": 0.24,
            "percent_change_7d": 3.58
          }
        },
        "last_updated": 1537419571
      },
      "1703": {
        "id": 1703,
        "name": "Metaverse ETP",
        "symbol": "ETP",
        "website_slug": "metaverse",
        "rank": 43,
        "circulating_supply": 51678429.0,
        "total_supply": 56412562.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 3.1149689936,
            "volume_24h": 3481031.32940596,
            "market_cap": 160976703.0,
            "percent_change_1h": -0.38,
            "percent_change_24h": 1.37,
            "percent_change_7d": -2.77
          }
        },
        "last_updated": 1537419570
      },
      "1697": {
        "id": 1697,
        "name": "Basic Attention Token",
        "symbol": "BAT",
        "website_slug": "basic-attention-token",
        "rank": 44,
        "circulating_supply": 1000000000.0,
        "total_supply": 1500000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.1527798437,
            "volume_24h": 2034097.87133178,
            "market_cap": 152779844.0,
            "percent_change_1h": 0.73,
            "percent_change_24h": 3.0,
            "percent_change_7d": 1.99
          }
        },
        "last_updated": 1537419563
      },
      "2603": {
        "id": 2603,
        "name": "Pundi X",
        "symbol": "NPXS",
        "website_slug": "pundi-x",
        "rank": 45,
        "circulating_supply": 108288149315.0,
        "total_supply": 280255193861.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0013681275,
            "volume_24h": 1797507.78480127,
            "market_cap": 148151992.0,
            "percent_change_1h": -2.41,
            "percent_change_24h": -0.55,
            "percent_change_7d": -5.21
          }
        },
        "last_updated": 1537419580
      },
      "2682": {
        "id": 2682,
        "name": "Holo",
        "symbol": "HOT",
        "website_slug": "holo",
        "rank": 46,
        "circulating_supply": 133214575156.0,
        "total_supply": 177619433541.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0010374698,
            "volume_24h": 3624416.8533015,
            "market_cap": 138206101.0,
            "percent_change_1h": -0.12,
            "percent_change_24h": -2.12,
            "percent_change_7d": -13.06
          }
        },
        "last_updated": 1537419584
      },
      "1104": {
        "id": 1104,
        "name": "Augur",
        "symbol": "REP",
        "website_slug": "augur",
        "rank": 47,
        "circulating_supply": 11000000.0,
        "total_supply": 11000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 12.3568738597,
            "volume_24h": 2871952.67696617,
            "market_cap": 135925612.0,
            "percent_change_1h": -0.58,
            "percent_change_24h": -1.17,
            "percent_change_7d": -7.79
          }
        },
        "last_updated": 1537419563
      },
      "1455": {
        "id": 1455,
        "name": "Golem",
        "symbol": "GNT",
        "website_slug": "golem-network-tokens",
        "rank": 48,
        "circulating_supply": 959242000.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.1380290383,
            "volume_24h": 1782321.99452481,
            "market_cap": 132403251.0,
            "percent_change_1h": 0.03,
            "percent_change_24h": 0.15,
            "percent_change_7d": 11.55
          }
        },
        "last_updated": 1537419570
      },
      "1343": {
        "id": 1343,
        "name": "Stratis",
        "symbol": "STRAT",
        "website_slug": "stratis",
        "rank": 49,
        "circulating_supply": 99020967.0,
        "total_supply": 99020967.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.3125389053,
            "volume_24h": 1080285.89616157,
            "market_cap": 129968872.0,
            "percent_change_1h": -0.19,
            "percent_change_24h": -0.29,
            "percent_change_7d": -2.22
          }
        },
        "last_updated": 1537419566
      },
      "1925": {
        "id": 1925,
        "name": "Waltonchain",
        "symbol": "WTC",
        "website_slug": "waltonchain",
        "rank": 50,
        "circulating_supply": 40144099.0,
        "total_supply": 70000000.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 3.0203892553,
            "volume_24h": 5647986.69951339,
            "market_cap": 121250807.0,
            "percent_change_1h": 0.13,
            "percent_change_24h": -2.47,
            "percent_change_7d": -3.07
          }
        },
        "last_updated": 1537419574
      },
      "1975": {
        "id": 1975,
        "name": "Chainlink",
        "symbol": "LINK",
        "website_slug": "chainlink",
        "rank": 51,
        "circulating_supply": 350000000.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.3390973529,
            "volume_24h": 3786075.07749006,
            "market_cap": 118684074.0,
            "percent_change_1h": -0.16,
            "percent_change_24h": 4.65,
            "percent_change_7d": 30.47
          }
        },
        "last_updated": 1537419572
      },
      "1759": {
        "id": 1759,
        "name": "Status",
        "symbol": "SNT",
        "website_slug": "status",
        "rank": 52,
        "circulating_supply": 3470483788.0,
        "total_supply": 6804870174.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0337021689,
            "volume_24h": 6951409.72832753,
            "market_cap": 116962831.0,
            "percent_change_1h": 0.18,
            "percent_change_24h": 0.97,
            "percent_change_7d": 4.91
          }
        },
        "last_updated": 1537419568
      },
      "291": {
        "id": 291,
        "name": "MaidSafeCoin",
        "symbol": "MAID",
        "website_slug": "maidsafecoin",
        "rank": 53,
        "circulating_supply": 452552412.0,
        "total_supply": 452552412.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.2554374199,
            "volume_24h": 1265540.141141,
            "market_cap": 115598820.0,
            "percent_change_1h": -0.06,
            "percent_change_24h": 6.13,
            "percent_change_7d": 12.36
          }
        },
        "last_updated": 1537419555
      },
      "1789": {
        "id": 1789,
        "name": "Populous",
        "symbol": "PPT",
        "website_slug": "populous",
        "rank": 54,
        "circulating_supply": 37004027.0,
        "total_supply": 53252246.0,
        "max_supply": 53252246.0,
        "quotes": {
          "USD": {
            "price": 3.086715606,
            "volume_24h": 2539190.22944974,
            "market_cap": 114220907.0,
            "percent_change_1h": 1.17,
            "percent_change_24h": -2.22,
            "percent_change_7d": -6.56
          }
        },
        "last_updated": 1537419570
      },
      "1521": {
        "id": 1521,
        "name": "Komodo",
        "symbol": "KMD",
        "website_slug": "komodo",
        "rank": 55,
        "circulating_supply": 109786168.0,
        "total_supply": 109786168.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.0222233603,
            "volume_24h": 288955.960896358,
            "market_cap": 112225986.0,
            "percent_change_1h": 0.01,
            "percent_change_24h": -0.2,
            "percent_change_7d": 3.05
          }
        },
        "last_updated": 1537419571
      },
      "2027": {
        "id": 2027,
        "name": "Cryptonex",
        "symbol": "CNX",
        "website_slug": "cryptonex",
        "rank": 56,
        "circulating_supply": 55470050.0,
        "total_supply": 106918775.0,
        "max_supply": 210000000.0,
        "quotes": {
          "USD": {
            "price": 1.9929214003,
            "volume_24h": 4342995.39478617,
            "market_cap": 110547450.0,
            "percent_change_1h": -0.73,
            "percent_change_24h": 0.01,
            "percent_change_7d": -3.47
          }
        },
        "last_updated": 1537419570
      },
      "1320": {
        "id": 1320,
        "name": "Ardor",
        "symbol": "ARDR",
        "website_slug": "ardor",
        "rank": 57,
        "circulating_supply": 998999495.0,
        "total_supply": 998999495.0,
        "max_supply": 998999495.0,
        "quotes": {
          "USD": {
            "price": 0.1101354057,
            "volume_24h": 2202631.43061222,
            "market_cap": 110025215.0,
            "percent_change_1h": -0.55,
            "percent_change_24h": -3.52,
            "percent_change_7d": 17.49
          }
        },
        "last_updated": 1537419570
      },
      "2403": {
        "id": 2403,
        "name": "MOAC",
        "symbol": "MOAC",
        "website_slug": "moac",
        "rank": 58,
        "circulating_supply": 62463334.0,
        "total_supply": 151205864.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.7339730985,
            "volume_24h": 24736.6586479342,
            "market_cap": 108309740.0,
            "percent_change_1h": 0.7,
            "percent_change_24h": -0.69,
            "percent_change_7d": 23.96
          }
        },
        "last_updated": 1537419574
      },
      "2021": {
        "id": 2021,
        "name": "RChain",
        "symbol": "RHOC",
        "website_slug": "rchain",
        "rank": 59,
        "circulating_supply": 382047675.0,
        "total_supply": 870663574.0,
        "max_supply": 1000000000.0,
        "quotes": {
          "USD": {
            "price": 0.2675940031,
            "volume_24h": 691752.752680062,
            "market_cap": 102233667.0,
            "percent_change_1h": 3.56,
            "percent_change_24h": 10.46,
            "percent_change_7d": 37.0
          }
        },
        "last_updated": 1537419571
      },
      "2087": {
        "id": 2087,
        "name": "KuCoin Shares",
        "symbol": "KCS",
        "website_slug": "kucoin-shares",
        "rank": 60,
        "circulating_supply": 90730576.0,
        "total_supply": 180730576.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.1247175066,
            "volume_24h": 149301.312650504,
            "market_cap": 102046267.0,
            "percent_change_1h": 0.67,
            "percent_change_24h": 7.49,
            "percent_change_7d": 1.9
          }
        },
        "last_updated": 1537419564
      },
      "2405": {
        "id": 2405,
        "name": "IOST",
        "symbol": "IOST",
        "website_slug": "iostoken",
        "rank": 61,
        "circulating_supply": 8400000000.0,
        "total_supply": 21000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0119696397,
            "volume_24h": 4977707.99137123,
            "market_cap": 100544974.0,
            "percent_change_1h": 0.23,
            "percent_change_24h": 0.54,
            "percent_change_7d": 5.7
          }
        },
        "last_updated": 1537419576
      },
      "2608": {
        "id": 2608,
        "name": "Mithril",
        "symbol": "MITH",
        "website_slug": "mithril",
        "rank": 62,
        "circulating_supply": 387392092.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.259106158,
            "volume_24h": 7823609.45831138,
            "market_cap": 100375677.0,
            "percent_change_1h": -0.22,
            "percent_change_24h": 1.86,
            "percent_change_7d": -5.8
          }
        },
        "last_updated": 1537419580
      },
      "118": {
        "id": 118,
        "name": "ReddCoin",
        "symbol": "RDD",
        "website_slug": "reddcoin",
        "rank": 63,
        "circulating_supply": 28808713174.0,
        "total_supply": 28808713174.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0034572233,
            "volume_24h": 1525668.17578945,
            "market_cap": 99598153.0,
            "percent_change_1h": -0.8,
            "percent_change_24h": -0.39,
            "percent_change_7d": -3.96
          }
        },
        "last_updated": 1537419614
      },
      "2606": {
        "id": 2606,
        "name": "Wanchain",
        "symbol": "WAN",
        "website_slug": "wanchain",
        "rank": 64,
        "circulating_supply": 106152493.0,
        "total_supply": 210000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.9183786289,
            "volume_24h": 1367010.98399429,
            "market_cap": 97488181.0,
            "percent_change_1h": -0.04,
            "percent_change_24h": 2.82,
            "percent_change_7d": 3.36
          }
        },
        "last_updated": 1537419577
      },
      "2062": {
        "id": 2062,
        "name": "Aion",
        "symbol": "AION",
        "website_slug": "aion",
        "rank": 65,
        "circulating_supply": 223640562.0,
        "total_supply": 465934587.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.4218624014,
            "volume_24h": 1629206.90417304,
            "market_cap": 94345545.0,
            "percent_change_1h": -0.79,
            "percent_change_24h": 1.7,
            "percent_change_7d": -0.99
          }
        },
        "last_updated": 1537419568
      },
      "2563": {
        "id": 2563,
        "name": "TrueUSD",
        "symbol": "TUSD",
        "website_slug": "trueusd",
        "rank": 66,
        "circulating_supply": 93357508.0,
        "total_supply": 93357508.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.0076028419,
            "volume_24h": 16771560.5694451,
            "market_cap": 94067290.0,
            "percent_change_1h": 0.25,
            "percent_change_24h": 0.44,
            "percent_change_7d": 0.58
          }
        },
        "last_updated": 1537419576
      },
      "1903": {
        "id": 1903,
        "name": "Hshare",
        "symbol": "HSR",
        "website_slug": "hshare",
        "rank": 67,
        "circulating_supply": 43502540.0,
        "total_supply": 43502540.0,
        "max_supply": 84000000.0,
        "quotes": {
          "USD": {
            "price": 2.1259797686,
            "volume_24h": 2075537.55695396,
            "market_cap": 92485520.0,
            "percent_change_1h": 4.24,
            "percent_change_24h": 1.52,
            "percent_change_7d": -2.82
          }
        },
        "last_updated": 1537419575
      },
      "1757": {
        "id": 1757,
        "name": "FunFair",
        "symbol": "FUN",
        "website_slug": "funfair",
        "rank": 68,
        "circulating_supply": 5010848189.0,
        "total_supply": 10999873621.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.017234549,
            "volume_24h": 2256496.09741735,
            "market_cap": 86359709.0,
            "percent_change_1h": 0.34,
            "percent_change_24h": 12.9,
            "percent_change_7d": 33.36
          }
        },
        "last_updated": 1537419570
      },
      "2502": {
        "id": 2502,
        "name": "Huobi Token",
        "symbol": "HT",
        "website_slug": "huobi-token",
        "rank": 69,
        "circulating_supply": 50000200.0,
        "total_supply": 500000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.7195330509,
            "volume_24h": 11709164.1681809,
            "market_cap": 85976996.0,
            "percent_change_1h": 0.19,
            "percent_change_24h": -0.87,
            "percent_change_7d": 9.0
          }
        },
        "last_updated": 1537419578
      },
      "1876": {
        "id": 1876,
        "name": "Dentacoin",
        "symbol": "DCN",
        "website_slug": "dentacoin",
        "rank": 70,
        "circulating_supply": 325226613094.0,
        "total_supply": 1963173416169.0,
        "max_supply": 8000000000000.0,
        "quotes": {
          "USD": {
            "price": 0.0002596479,
            "volume_24h": 90441.222298041,
            "market_cap": 84444409.0,
            "percent_change_1h": -0.71,
            "percent_change_24h": 2.64,
            "percent_change_7d": 1.39
          }
        },
        "last_updated": 1537419572
      },
      "2299": {
        "id": 2299,
        "name": "aelf",
        "symbol": "ELF",
        "website_slug": "aelf",
        "rank": 71,
        "circulating_supply": 250000000.0,
        "total_supply": 280000000.0,
        "max_supply": 1000000000.0,
        "quotes": {
          "USD": {
            "price": 0.3292169309,
            "volume_24h": 5868860.5287697,
            "market_cap": 82304233.0,
            "percent_change_1h": 2.42,
            "percent_change_24h": 1.57,
            "percent_change_7d": 3.27
          }
        },
        "last_updated": 1537419577
      },
      "2591": {
        "id": 2591,
        "name": "Dropil",
        "symbol": "DROP",
        "website_slug": "dropil",
        "rank": 72,
        "circulating_supply": 21679255305.0,
        "total_supply": 30000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0036580135,
            "volume_24h": 96864.389881995,
            "market_cap": 79303008.0,
            "percent_change_1h": -0.17,
            "percent_change_24h": -6.59,
            "percent_change_7d": 5.47
          }
        },
        "last_updated": 1537419581
      },
      "1966": {
        "id": 1966,
        "name": "Decentraland",
        "symbol": "MANA",
        "website_slug": "decentraland",
        "rank": 73,
        "circulating_supply": 1050141509.0,
        "total_supply": 2644403343.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0740021001,
            "volume_24h": 4793576.51528566,
            "market_cap": 77712677.0,
            "percent_change_1h": 3.05,
            "percent_change_24h": 6.35,
            "percent_change_7d": 18.27
          }
        },
        "last_updated": 1537419574
      },
      "2213": {
        "id": 2213,
        "name": "QASH",
        "symbol": "QASH",
        "website_slug": "qash",
        "rank": 74,
        "circulating_supply": 350000000.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.2119827738,
            "volume_24h": 976316.909358066,
            "market_cap": 74193971.0,
            "percent_change_1h": -0.57,
            "percent_change_24h": -1.17,
            "percent_change_7d": 2.53
          }
        },
        "last_updated": 1537419575
      },
      "1758": {
        "id": 1758,
        "name": "TenX",
        "symbol": "PAY",
        "website_slug": "tenx",
        "rank": 75,
        "circulating_supply": 109307861.0,
        "total_supply": 205218256.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.6760286597,
            "volume_24h": 3992691.95485249,
            "market_cap": 73895246.0,
            "percent_change_1h": 0.04,
            "percent_change_24h": 4.14,
            "percent_change_7d": 9.35
          }
        },
        "last_updated": 1537419570
      },
      "1727": {
        "id": 1727,
        "name": "Bancor",
        "symbol": "BNT",
        "website_slug": "bancor",
        "rank": 76,
        "circulating_supply": 53652547.0,
        "total_supply": 78321745.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.3582117088,
            "volume_24h": 2636833.38776847,
            "market_cap": 72871517.0,
            "percent_change_1h": -0.38,
            "percent_change_24h": -1.47,
            "percent_change_7d": 11.0
          }
        },
        "last_updated": 1537419564
      },
      "1698": {
        "id": 1698,
        "name": "Horizen",
        "symbol": "ZEN",
        "website_slug": "zencash",
        "rank": 77,
        "circulating_supply": 4756438.0,
        "total_supply": 4756438.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 14.99213351,
            "volume_24h": 657465.325718391,
            "market_cap": 71309146.0,
            "percent_change_1h": 0.21,
            "percent_change_24h": -0.02,
            "percent_change_7d": -4.36
          }
        },
        "last_updated": 1537419570
      },
      "1586": {
        "id": 1586,
        "name": "Ark",
        "symbol": "ARK",
        "website_slug": "ark",
        "rank": 78,
        "circulating_supply": 105269194.0,
        "total_supply": 136519194.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.6678964426,
            "volume_24h": 228109.122337185,
            "market_cap": 70308920.0,
            "percent_change_1h": -0.22,
            "percent_change_24h": 1.4,
            "percent_change_7d": 10.3
          }
        },
        "last_updated": 1537419568
      },
      "1229": {
        "id": 1229,
        "name": "DigixDAO",
        "symbol": "DGD",
        "website_slug": "digixdao",
        "rank": 79,
        "circulating_supply": 2000000.0,
        "total_supply": 2000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 34.8763601167,
            "volume_24h": 446340.84576249,
            "market_cap": 69752720.0,
            "percent_change_1h": 0.59,
            "percent_change_24h": 2.66,
            "percent_change_7d": 2.31
          }
        },
        "last_updated": 1537419565
      },
      "1776": {
        "id": 1776,
        "name": "Crypto.com",
        "symbol": "MCO",
        "website_slug": "crypto-com",
        "rank": 80,
        "circulating_supply": 15793831.0,
        "total_supply": 31587682.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 4.3828761505,
            "volume_24h": 6357077.77665431,
            "market_cap": 69222406.0,
            "percent_change_1h": -0.08,
            "percent_change_24h": 3.49,
            "percent_change_7d": 1.21
          }
        },
        "last_updated": 1537419570
      },
      "2874": {
        "id": 2874,
        "name": "Aurora",
        "symbol": "AOA",
        "website_slug": "aurora",
        "rank": 81,
        "circulating_supply": 3462641652.0,
        "total_supply": 10000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0194689253,
            "volume_24h": 1342054.44594315,
            "market_cap": 67413912.0,
            "percent_change_1h": -1.03,
            "percent_change_24h": -2.23,
            "percent_change_7d": 34.69
          }
        },
        "last_updated": 1537419585
      },
      "66": {
        "id": 66,
        "name": "Nxt",
        "symbol": "NXT",
        "website_slug": "nxt",
        "rank": 82,
        "circulating_supply": 998999942.0,
        "total_supply": 998999942.0,
        "max_supply": 1000000000.0,
        "quotes": {
          "USD": {
            "price": 0.0662478485,
            "volume_24h": 2035571.67777017,
            "market_cap": 66181597.0,
            "percent_change_1h": 0.14,
            "percent_change_24h": 0.32,
            "percent_change_7d": 7.57
          }
        },
        "last_updated": 1537419610
      },
      "2246": {
        "id": 2246,
        "name": "CyberMiles",
        "symbol": "CMT",
        "website_slug": "cybermiles",
        "rank": 83,
        "circulating_supply": 695233506.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0923611653,
            "volume_24h": 17376371.4141821,
            "market_cap": 64212577.0,
            "percent_change_1h": 0.16,
            "percent_change_24h": 7.52,
            "percent_change_7d": 14.98
          }
        },
        "last_updated": 1537419572
      },
      "1750": {
        "id": 1750,
        "name": "GXChain",
        "symbol": "GXS",
        "website_slug": "gxchain",
        "rank": 84,
        "circulating_supply": 60000000.0,
        "total_supply": 100000000.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 1.0567361957,
            "volume_24h": 5223711.8780112,
            "market_cap": 63404172.0,
            "percent_change_1h": -0.18,
            "percent_change_24h": 1.67,
            "percent_change_7d": 3.11
          }
        },
        "last_updated": 1537419572
      },
      "2300": {
        "id": 2300,
        "name": "WAX",
        "symbol": "WAX",
        "website_slug": "wax",
        "rank": 85,
        "circulating_supply": 932901783.0,
        "total_supply": 1850000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0675071972,
            "volume_24h": 744587.26980427,
            "market_cap": 62977585.0,
            "percent_change_1h": 0.49,
            "percent_change_24h": 12.52,
            "percent_change_7d": 18.82
          }
        },
        "last_updated": 1537419579
      },
      "2575": {
        "id": 2575,
        "name": "Bitcoin Private",
        "symbol": "BTCP",
        "website_slug": "bitcoin-private",
        "rank": 86,
        "circulating_supply": 20524490.0,
        "total_supply": 20524490.0,
        "max_supply": 21000000.0,
        "quotes": {
          "USD": {
            "price": 2.9570933498,
            "volume_24h": 87578.4646932348,
            "market_cap": 60692833.0,
            "percent_change_1h": 0.44,
            "percent_change_24h": -0.75,
            "percent_change_7d": 1.17
          }
        },
        "last_updated": 1537419573
      },
      "1908": {
        "id": 1908,
        "name": "Nebulas",
        "symbol": "NAS",
        "website_slug": "nebulas-token",
        "rank": 87,
        "circulating_supply": 45500000.0,
        "total_supply": 100000000.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 1.3309268847,
            "volume_24h": 2857799.89006685,
            "market_cap": 60557173.0,
            "percent_change_1h": 0.09,
            "percent_change_24h": -0.25,
            "percent_change_7d": -1.99
          }
        },
        "last_updated": 1537419570
      },
      "2416": {
        "id": 2416,
        "name": "Theta Token",
        "symbol": "THETA",
        "website_slug": "theta-token",
        "rank": 88,
        "circulating_supply": 684002689.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.086960309,
            "volume_24h": 3592935.94485908,
            "market_cap": 59481085.0,
            "percent_change_1h": 0.8,
            "percent_change_24h": 2.64,
            "percent_change_7d": 4.96
          }
        },
        "last_updated": 1537419574
      },
      "2243": {
        "id": 2243,
        "name": "Dragonchain",
        "symbol": "DRGN",
        "website_slug": "dragonchain",
        "rank": 89,
        "circulating_supply": 238421940.0,
        "total_supply": 433494437.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.2446088552,
            "volume_24h": 1445158.11596166,
            "market_cap": 58320118.0,
            "percent_change_1h": -0.45,
            "percent_change_24h": 6.72,
            "percent_change_7d": 14.49
          }
        },
        "last_updated": 1537419578
      },
      "2132": {
        "id": 2132,
        "name": "Power Ledger",
        "symbol": "POWR",
        "website_slug": "power-ledger",
        "rank": 90,
        "circulating_supply": 381979031.0,
        "total_supply": 1000000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.1490321225,
            "volume_24h": 6750784.91613707,
            "market_cap": 56927146.0,
            "percent_change_1h": -0.27,
            "percent_change_24h": -3.14,
            "percent_change_7d": 9.25
          }
        },
        "last_updated": 1537419573
      },
      "2349": {
        "id": 2349,
        "name": "Mixin",
        "symbol": "XIN",
        "website_slug": "mixin",
        "rank": 91,
        "circulating_supply": 442996.0,
        "total_supply": 1000000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 126.904108249,
            "volume_24h": 26480.458758378,
            "market_cap": 56217951.0,
            "percent_change_1h": -5.23,
            "percent_change_24h": -5.5,
            "percent_change_7d": -21.16
          }
        },
        "last_updated": 1537419574
      },
      "213": {
        "id": 213,
        "name": "MonaCoin",
        "symbol": "MONA",
        "website_slug": "monacoin",
        "rank": 92,
        "circulating_supply": 62392000.0,
        "total_supply": 62392000.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.8964681443,
            "volume_24h": 1093894.94890652,
            "market_cap": 55932440.0,
            "percent_change_1h": 0.35,
            "percent_change_24h": -7.83,
            "percent_change_7d": -7.83
          }
        },
        "last_updated": 1537419550
      },
      "789": {
        "id": 789,
        "name": "Nexus",
        "symbol": "NXS",
        "website_slug": "nexus",
        "rank": 93,
        "circulating_supply": 58447015.0,
        "total_supply": 58447015.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.9107410247,
            "volume_24h": 743751.031094989,
            "market_cap": 53230094.0,
            "percent_change_1h": -1.03,
            "percent_change_24h": 0.14,
            "percent_change_7d": 7.85
          }
        },
        "last_updated": 1537419562
      },
      "2308": {
        "id": 2308,
        "name": "Dai",
        "symbol": "DAI",
        "website_slug": "dai",
        "rank": 94,
        "circulating_supply": 52684788.0,
        "total_supply": 52684788.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 1.0037808243,
            "volume_24h": 10560438.1956033,
            "market_cap": 52883980.0,
            "percent_change_1h": 0.16,
            "percent_change_24h": 0.32,
            "percent_change_7d": 0.28
          }
        },
        "last_updated": 1537419572
      },
      "1169": {
        "id": 1169,
        "name": "PIVX",
        "symbol": "PIVX",
        "website_slug": "pivx",
        "rank": 95,
        "circulating_supply": 56781166.0,
        "total_supply": 56781166.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.920168719,
            "volume_24h": 653866.247524297,
            "market_cap": 52248253.0,
            "percent_change_1h": 1.05,
            "percent_change_24h": 2.84,
            "percent_change_7d": 7.4
          }
        },
        "last_updated": 1537419568
      },
      "1934": {
        "id": 1934,
        "name": "Loopring",
        "symbol": "LRC",
        "website_slug": "loopring",
        "rank": 96,
        "circulating_supply": 572074043.0,
        "total_supply": 1374956262.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.0911505958,
            "volume_24h": 2340728.55282011,
            "market_cap": 52144890.0,
            "percent_change_1h": -1.04,
            "percent_change_24h": 0.88,
            "percent_change_7d": 2.61
          }
        },
        "last_updated": 1537419574
      },
      "2492": {
        "id": 2492,
        "name": "Elastos",
        "symbol": "ELA",
        "website_slug": "elastos",
        "rank": 97,
        "circulating_supply": 7699219.0,
        "total_supply": 33582071.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 6.7370597349,
            "volume_24h": 2215923.69453748,
            "market_cap": 51870098.0,
            "percent_change_1h": -3.12,
            "percent_change_24h": -7.41,
            "percent_change_7d": -10.36
          }
        },
        "last_updated": 1537419579
      },
      "1414": {
        "id": 1414,
        "name": "ZCoin",
        "symbol": "XZC",
        "website_slug": "zcoin",
        "rank": 98,
        "circulating_supply": 5677134.0,
        "total_supply": 5677134.0,
        "max_supply": 21400000.0,
        "quotes": {
          "USD": {
            "price": 9.0606025328,
            "volume_24h": 848845.234619695,
            "market_cap": 51438252.0,
            "percent_change_1h": 0.29,
            "percent_change_24h": -0.04,
            "percent_change_7d": -3.05
          }
        },
        "last_updated": 1537419568
      },
      "1785": {
        "id": 1785,
        "name": "Gas",
        "symbol": "GAS",
        "website_slug": "gas",
        "rank": 99,
        "circulating_supply": 10128375.0,
        "total_supply": 17190378.0,
        "max_supply": 100000000.0,
        "quotes": {
          "USD": {
            "price": 4.9901224547,
            "volume_24h": 2139089.6949206,
            "market_cap": 50541832.0,
            "percent_change_1h": 0.71,
            "percent_change_24h": -0.74,
            "percent_change_7d": -11.63
          }
        },
        "last_updated": 1537419572
      },
      "1982": {
        "id": 1982,
        "name": "Kyber Network",
        "symbol": "KNC",
        "website_slug": "kyber-network",
        "rank": 100,
        "circulating_supply": 134132697.0,
        "total_supply": 215625349.0,
        "max_supply": null,
        "quotes": {
          "USD": {
            "price": 0.3731130618,
            "volume_24h": 2512386.3136867,
            "market_cap": 50046661.0,
            "percent_change_1h": -0.43,
            "percent_change_24h": -0.11,
            "percent_change_7d": 5.11
          }
        },
        "last_updated": 1537419573
      }
    },
    "metadata": {
      "timestamp": 1537419025,
      "num_cryptocurrencies": 1977,
      "error": null
    }
  }


