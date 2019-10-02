//hobby change description
$(".timeline-event-years-1").click(function() {
    $(".description #home").text("Object Oriented Programming");
    $(".description #tool span").text("Java, Command Window, Sublime");
    $(".description .B span").text("wbdwbk");
});

$(".timeline-event-years-2").click(function() {
    $(".description #home").text("QA Automation Intern");
    $(".description #tool span").text("C#, Ranorex");
});

$(".timeline-event-years-3").click(function() {
    $(".description #home").text("Data Structures and Algorithms");
    $(".description #tool span").text("Java, Command Window, IntelliJ");
});

$(".timeline-event-years-4").click(function() {
    $(".description #home").text("Personal Website");
    $(".description #tool span").text("HTML, CSS, JavaScript, JQuery");
});

$(".timeline-event-years-5").click(function() {
    $(".description #home").text("Aerobody Engineer");
    $(".description #tool span").text("SolidWorks, Mills, Lathe");
});

$(".timeline-event-years-6").click(function() {
    $(".description #home").text("Media Player");
    $(".description #tool span").text("Java, JavaFX");
});

$(".timeline-event-years-7").click(function() {
    $(".description #home").text("2048!");
    $(".description #tool span").text("Java, JavaFX");
});

$(".timeline-event-years-8").click(function() {
    $(".description #home").text("Combustion Lab");
    $(".description #tool span").text("SolidWorks, ANSYS");
});

$(".timeline-event-years-9").click(function() {
    $(".description #home").text("Myo Gesture Controled Game");
    $(".description #tool span").text("Java, Lua, JavaFX");
});

$(".timeline-event-years-10").click(function() {
    $(".description #home").text("Telemetry Member");
    $(".description #tool span").text("Go, Jenkins, Docker");
});

$(window).scroll(function(){
    $('.timelineTitle').css("left", $(this).scrollLeft() + $(this).width() / 2);
    $('.description').css("left", $(this).scrollLeft());
});
