var app = angular.module('child-simulator', []);


app.controller('controller', function($scope) {
    $scope.stuff = {
        words: ['Blah ', 'Cookie ', 'Why? ', 'No ', 'Please? ', 'Lego ', 'Poop ', 'Mine ', 'Gimme ', 'Stop! ', 'Hi ', 'Bye '],
        phrases: ['I hate you!', 'Stop it!', 'This one time', 'Daddy! Daddy! Daddy!', 'Can I have it?', 'Can we go outside?', 'Can I stay up late?'],
        styles: ['style1', 'style2', 'style3', 'style4', 'style5', 'style6', 'style7']
    };
    $scope.result = [];
    $scope.words = function() {
        var randIndex = Math.floor(Math.random() * $scope.stuff.words.length);
        var newElement = {
            word: $scope.stuff.words[randIndex],
            style: ""
        };
        $scope.result.push(newElement);
    };
    $scope.moreWords = function() {
        var randIndex = Math.floor(Math.random() * $scope.stuff.phrases.length);
        var newElement = {
            word: $scope.stuff.phrases[randIndex],
            style: ""
        };
        $scope.result.push(newElement);
    };
    $scope.wordsDec = function() {
        var randIndex = Math.floor(Math.random() * $scope.stuff.words.length);
        var randStyle = Math.floor(Math.random() * $scope.stuff.styles.length);
        var newElement = {
            word: $scope.stuff.words[randIndex],
            style: $scope.stuff.styles[randStyle]
        };
        console.log(newElement.style);
        $scope.result.push(newElement);
    };
    $scope.moreWordsDec = function() {
        var randIndex = Math.floor(Math.random() * $scope.stuff.phrases.length);
        var randStyle = Math.floor(Math.random() * $scope.stuff.styles.length);
        var newElement = {
            word: $scope.stuff.phrases[randIndex],
            style: $scope.stuff.styles[randStyle]
        };
        $scope.result.push(newElement);
    };


});
