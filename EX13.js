const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

function WaterArea(Arr) {
    let max = 0;
    let i = 0;
    let j = Arr.length - 1;
    while (j > i) {
        const a = Arr[i];
        const b = Arr[j];
        const area = Math.min(a, b) * (j - i);
        if (area > max) max = area;
        if (b > a) i++;
        else j--;
    }
    console.log(max);
}
WaterArea(height)