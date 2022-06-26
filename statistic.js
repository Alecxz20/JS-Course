// Statistic: Sample mean (average), sample median and sample mode
//A population is the entire group that you want to draw conclusions about. 
//A sample is the specific group that you will collect data from.

//Sample mean (average)

function sampleMean(sample) {
    const sum = sample.reduce(
        function (oldValue = 0, newValue) {
            return oldValue + newValue;
        }
    );
    const result = sum / sample.length;
    document.getElementById("statisticResults").innerHTML = `<p>The average of this sample is ${result}</p>`
}

function calcSampleMean() {
    const data = document.getElementById("array").value;
    const array = JSON.parse("[" + data + "]");
    sampleMean(array);
}


//Sample median

function sampleMedian (array) {
    array.sort((a, b) => a - b); //This function helps sorting the array elements with .sort()
    if (array.length%2 === 0) { // if -> the array elements are even (using the module operator to know if it's an even number)
        const n = array.length;
        const position = (n / 2) - 1;
        const result = (array[position] + array[position + 1]) / 2;
        document.getElementById("statisticResults").innerHTML = `<p>The median of this sample is ${result}</p>`
    } else { // if -> the array elements are odd
        const digit = Math.floor(array.length / 2);
        const median = array[digit];
        document.getElementById("statisticResults").innerHTML = `<p>The median of this sample is ${median}</p>`
    }
}

function calcSampleMedian() {
    const data = document.getElementById("array").value;
    const array = JSON.parse("[" + data + "]");
    sampleMedian(array);
}

// Sample mode

function sampleMode(array) {
    const count = {};
    array.map( 
        function (x) {
            if (count[x]) {
                count[x] += 1;
            } else {
                count[x] = 1;
            }
        }
    );
    
    const arrayList = Object.entries(count).sort(
        function (a, b) {
            return a[1] - b[1];
        }  
    );
    const result = arrayList[arrayList.length - 1][0];
    const repeat = arrayList[arrayList.length - 1][1];
    document.getElementById("statisticResults").innerHTML = `<p>The most repetitive integer is number ${result} with ${repeat} repetitions</p>`
}

function calcSampleMode () {
    const data = document.getElementById("array").value; 
    const array = JSON.parse("[" + data + "]");
    sampleMode(array);    
}

