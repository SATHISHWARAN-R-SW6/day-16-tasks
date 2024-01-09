// Step 1: Start countdown from 10
console.log(10);

// Step 2: Use setTimeout for the countdown
setTimeout(function () {
    console.log(9);

    setTimeout(function () {
        console.log(8);

        setTimeout(function () {
            console.log(7);

            setTimeout(function () {
                console.log(6);

                setTimeout(function () {
                    console.log(5);

                    setTimeout(function () {
                        console.log(4);

                        setTimeout(function () {
                            console.log(3);

                            setTimeout(function () {
                                console.log(2);

                                setTimeout(function () {
                                    console.log(1);

                                    // Step 3: Display "Happy Independence Day" after countdown
                                    console.log('Happy Independence Day');
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
