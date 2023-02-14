                                    //
                                    //
                                    //
                                    //
                                    //Hello? can anyone hear me?
                                    //.....
                                    //
                                    //Huh?
                                    //What no I didn't hear anything just now
                                    //but it sounded like they were talking to you
function become_a_BIG_SHOT() {

    let nothing = " Hello? can anyone hear me?\n.....\nHuh?\nWhat no I didn\'t hear anything just now\nbut it sounded like they were talking to you"
    console.log(nothing)

}
function not() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.google.com', false);
    req.send(null);
    if(req.status == 200)
        alert(req.responseText);
}