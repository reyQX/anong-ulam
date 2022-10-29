$(document).ready(function() {
    $(".btn-outlined").on('click', () => {
        $(".modal").css("display", "none")
    })

    $(".btn").on('click', () => {
        $(".modal").css("display", "block");

        let index = Math.floor(Math.random() * 80);
        let ulam = ULAM[index]
        $(".generatedUlam").html(ulam);

        console.table(index, ulam)
    })
});