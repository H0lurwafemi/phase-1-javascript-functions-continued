// code your solution here

// Function: saturdayFun
function saturdayFun(activity) {
    if (activity === undefined) {
        activity = 'roller-skate';
    }
    return "This Saturday, I want to " + activity + "!";
}

// Function: mondayWork
function mondayWork(activity) {
    if (activity === undefined) {
        activity = 'go to the office';
    }
    return "This Monday, I will " + activity + ".";
}

// Function: wrapAdjective
function wrapAdjective(flair) {
    if (flair === undefined) {
        flair = "*";
    }
    return function(adjective) {
        if (adjective === undefined) {
            adjective = "special";
        }
        return "You are " + flair + adjective + flair + "!";
    };
}


    



    