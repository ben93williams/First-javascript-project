function ShowYear1() {
    document.getElementById('TableY1').style.display = "inline"         // This will select the Element called, in this case Table for Year 1 and display it.
    document.getElementById('TableY2').style.display = "none"		    // This is used for Table Y2 and Y3 and has display="none" to hide the tables when this function occurs
    document.getElementById('TableY3').style.display = "none"           // The visible table changes with every ShowYear function.
}

function ShowYear2() {
    document.getElementById('TableY1').style.display = "none"
    document.getElementById('TableY2').style.display = "inline"
    document.getElementById('TableY3').style.display = "none"
}

function ShowYear3() {
    document.getElementById('TableY1').style.display = "none"
    document.getElementById('TableY2').style.display = "none"
    document.getElementById('TableY3').style.display = "inline"    
}

window.onload = function () {
    document.getElementById('btnY1').addEventListener('click', ShowYear1);        // These add Event Handlers pertaining to the Element ID that has been called.
    document.getElementById('btnY2').addEventListener('click', ShowYear2);	      // btnY1,2 and 3 are for the Year 1,2 and 3 buttons, and are waiting for the 'click' event to occur
    document.getElementById('btnY3').addEventListener('click', ShowYear3);        // when the user presses one of the buttons, it will then call and use the following function ShowYear1,2 or 3
    document.getElementById('btnCalc').addEventListener('click', CalcGrade);
	document.getElementById('btnCalc').addEventListener('click', FindLowest);
	document.getElementById('btnCalc').addEventListener('click', YearGrade);
	document.getElementById('btnCalc').addEventListener('click', classification);
	}

// this is the function to calculate the overall grade for each individual module.
function CalcGrade() {

    {
        var overall
        overall = 0
        overall = overall + document.getElementById('grade0').value 
        / 100
        * parseInt(document.getElementById('weight0').innerHTML);
        document.getElementById('Ograde0').innerHTML = overall; //this takes the grade inputed and does the calculation for the overall grade for the first course.
    }
    {
        var overall = 0
        var j = 1
        for (var i = 1; i < 11; i++) {            
            overall = overall + document.getElementById('grade' + i).value  //this takes all the remaining courses and gets the overall grade for them.
            / 100
            * parseInt(document.getElementById('weight' + i).innerHTML);
            document.getElementById('Ograde'+j).innerHTML = overall;
                if (i == 3 ||
                    i == 5 ||
                    i == 6 ||
                    i == 8 ||
                    i == 10) {
                    overall = 0;
                    j++;
                } else { }                
        }
    }
}    

arr = [];
var lowest1 = 0;
var lowest2 = 0;
var Ygrade = 0;

// This function is used to calculate the overall year grade from your best 80% 
function FindLowest() { 				
    
    Ygrade = 0;
    for (var i = 0; i < 6; i++)
    {       
        arr[i] = parseInt(document.getElementById('Ograde' + i).innerHTML);    // Assigns the Overall Grade numbers to an Array  
    }
    lowest1 = 101;  // has to be above 100% as that is the max percent possibly acheived
    lowest2 = 101;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] < lowest1) {
            lowest1 = arr[i];			
        } 
    } 	
	 for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] < lowest2 && arr[i] > lowest1 ) {             // Checks that second number is lower than Lowest 2 and more than Lowest 1
            lowest2 = arr[i];
        } 
    }    
}

// this function gets and displays the final overall grade for the year.
function YearGrade(){

for (var i = 0; i < arr.length; i++){
    Ygrade = Ygrade + parseInt(document.getElementById('Ograde' + i).innerHTML)
    }
    Ygrade = (Ygrade - (lowest1 + lowest2)) / 4;	
    parseFloat(document.getElementById('OverallSpan').innerHTML = Ygrade + '%').toFixed(2);	// this does the calculation and coverts it to number to 2 decimal points
}

//this function takes the overall year grade and gives it the corresponding classification.
function classification() {
    if (Ygrade > 70) {
        document.getElementById('degreespan').innerHTML = '1st';
    } else if (Ygrade > 60) {
        document.getElementById('degreespan').innerHTML = '2.1';
    } else if (Ygrade > 50) {
        document.getElementById('degreespan').innerHTML = '2.2';
    } else if (Ygrade > 40) {
        document.getElementById('degreespan').innerHTML = 'pass';
    } else if (Ygrade > 30) {
        document.getElementById('degreespan').innerHTML = 'Marginal Fail';
    } else {
        document.getElementById('degreespan').innerHTML = 'Fail';
    }
}