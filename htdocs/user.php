<?php
session_start();

if (!isset($_SESSION['user_products']) || empty($_SESSION['user_products'])) {
    echo '<p>No products in favorites.</p>';
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>hecate style</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/style_buypage.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="icon" href="img/hslogo.webp" type="image">  
    
<!-- Yandex.RTB -->
<script>window.yaContextCb=window.yaContextCb||[]</script>
<script src="https://yandex.ru/ads/system/context.js" async></script>
</head>
<body>
    
    <div id="preloader" class="preloader">
    </div>
    <div class="header">
        <nav class="navbar">
                <a href="" class="button_offer_design">Предложить дизайн</a>
            <a href="/index.php" class=""><img src="/img/hslogo.webp" class="logo position-absolute top-50 start-50 translate-middle"></a>
            <div class="d-flex">
                <a href="">
                    <img src="/img/search_icon.webp"  class="search_header" alt="">
                </a>
                <!-- <a href="" class="login">Вход</a>
                <a href="" class="reg">Регистрация</a> -->
                
                <?php 
                    if (isset($_COOKIE['login']))
                        echo '<a href="/logout.php" class="exit" name="exit">Выход</a>'
                ?>
            </div>
        </nav>
    </div>
    <div class="chain_bg">
        <div class="chain-wrap">
            <div class="chains">
                <img src="/img/chain.webp" class="chain" id="chain_1">
                <img src="/img/chain.webp" class="chain" id="chain_2">
            </div>
        </div>
    </div>
    <div class="blocks_wrap_wrap">
    <div class="blocks_wrap">
    <div class="block-wrap">
        <div class="block_item_card">
            <div class="user-info">
                <img src="/img/user_pfp.png" alt="">
                <div class="wrap-column-flex">
                    <div class="name"> <?=$_COOKIE['login'] ?> </div>
                    <hr class="desc_hr">
                    <div class="desc">opisanie
                    </div>
                </div>
            </div>
            <hr class="desc_hr">
            <div class="product-list">
            <?php
        foreach ($_SESSION['user_products'] as $productId) { ?>
                <div class="t_shirt_confused" id="<?php echo $productId; ?>">
                    <img
                      src="img/save.webp"
                      class="save save-img"
                      alt="save icon"
                       data-product-id="<?php echo $productId; ?>">
                    <a href="t_shirt_confused.html"
                      ><img
                        src="img/hs_confused.webp"
                        class="hs_img"
                        alt="" /></a
                    ><br />
                    <div class="txt_card">
                      <a href="t_shirt_confused.html">
                         t-shirt confused <br /><span> 2 200р </span>
                      </a>
                    </div>
                     <button class="remove-product" data-product-id="<?php echo $productId; ?>">Remove</button>
                  </div>
            <?php }
       ?>
                
            </div>
            </div>
        </div>
        <div class="chain_bg">
            <div class="chain-wrap">
                <div class="chains">
                    <img src="/img/chain.webp" class="chain" id="chain_1">
                    <img src="/img/chain.webp" class="chain" id="chain_2">
                </div>
            </div>
        </div>
        <div class="footer_wrap">
            <footer class="block_footer align-items-center">
                <a href="/index.html"><span id="logo">hecate style</span></a>
                <div class="right">
                    <!-- <a href="https://t.me/+pGF5nrmXnl1kZTVi"><span style="margin-right: 2vw;">Telegram</span></a> -->
                    <a href="/about.html">About</a>
                </div>
            </footer>
        </div>
</div>
</div>
<!-- Yandex.RTB R-A-7263108-2 -->
<!-- Yandex.RTB R-A-13590976-2 -->
<script>
window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
        "blockId": "R-A-13590976-2",
        "type": "floorAd",
        "platform": "desktop"
    })
})
</script>
<!-- Yandex.RTB R-A-13590976-1 -->
<script>
window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
        "blockId": "R-A-13590976-1",
        "type": "floorAd",
        "platform": "touch"
    })
})
</script>
<script>
    window.yaContextCb.push(()=>{
        Ya.Context.AdvManager.render({
            "blockId": "R-A-7263108-1",
            "type": "floorAd",
            "platform": "desktop"
        })
    })
    </script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    window.onload = function(){
        let preloader = document.getElementById('preloader');
        preloader.classList.add('hide-preloader');
        setTimeout(function() {
          preloader.classList.add('preloader-hiden')
        },0.001)
      }

      $(window).on('load pageshow', function () {
    $('.blocks_wrap').removeClass("off");
    $('.blocks_wrap').addClass("on"); 
});    
$("a:not([href*=javascript]):not([href*=\\#]):not(.fancybox):not([target]):not([data-fancybox])").click(function() {
    $('.blocks_wrap').removeClass("on");
    $('.blocks_wrap').addClass("off"); 
    let url = $(this).attr('href');
    window.setTimeout(function() {
        window.location.href = url;
    }, 400);    
    return false;
});
    </script>
    <script src="/js/script_buypage.js"></script>
</body>
</html>