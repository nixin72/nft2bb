const body = document.getElementsByTagName("body")[0];
body.innerHTML = body.innerHTML
                     .replace(/nft/ig, "beanie baby")
                     .replace(/nfts/ig, "beanie babies")
                     .replace(/non[-\s]fungible token/ig, "bb")
                     .replace(/non[-\s]fungible tokens/ig, "bbs");
