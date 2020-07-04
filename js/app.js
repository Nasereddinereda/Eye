var toggle = 0;
$(".evolvebtn").on('click', function () {


    if (toggle == 0) {

        $(".eye__eye-ball").addClass("anim-1");
        $(".iris2").addClass("d-none");

        setTimeout(function () {
            $(".eye__eye-ball").removeClass("anim-1");
            $(".iris1").removeClass("d-none");
        }, 400)

        $("#topic").html('Less Options, Less Dependable, Less Accessible');
        $(".evolvebtn").html('EVOLVE');
        toggle = 1 ; 

    } else {

        $(".eye__eye-ball").addClass("anim-1");
        $(".iris1").addClass("d-none");

        setTimeout(function () {
            $(".eye__eye-ball").removeClass("anim-1");
            $(".iris2").removeClass("d-none");
        }, 400)

        $("#topic").html('More Options, More Dependable, More Accessible');
        $(".evolvebtn").html('devolve');
        toggle = 0; 

    }


})