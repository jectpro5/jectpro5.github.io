var App = angular.module("App", []);
App.controller("MainController", function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
    };
    $scope.text = '';

    $scope.message = function (data) {
        $scope.text = data + ' hello';
    };

    var employee = {
        firstName: "Robert",
        lastName: "Fox",
        gender: "Male"
    }
    $scope.employee = employee;


    var hobby = {
        name: "moto",
        way: "runing",
        foto_1: "anglr_img/moto1.jpg"
    };
    $scope.hobby = hobby;


    var employees = [
        {firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
        {firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000},
        {firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
        {firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000},
        {firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000},
    ];
    $scope.employees = employees;


    var countries = [
        {
            name: "UK",
            cities: [
                {name: "London"},
                {name: "Manchester"},
                {name: "Birmingham"}
            ]
        },
        {
            name: "USA",
            cities: [
                {name: "Los Angeles"},
                {name: "Chicago"},
                {name: "Houston"}
            ]
        },
        {
            name: "India",
            cities: [
                {name: "Hyderabad"},
                {name: "Chennai"},
                {name: "Mumbai"}
            ]
        }
    ];
    $scope.countries = countries;


    var technologies = [
        {name: "C#", likes: 0, dislikes: 0},
        {name: "ASP.NET", likes: 0, dislikes: 0},
        {name: "SQL Server", likes: 0, dislikes: 0},
        {name: "AngularJS", likes: 0, dislikes: 0}
    ];
    $scope.technologies = technologies;
    $scope.incrementLikes = function (technology) {
        technology.likes++;
        am
    };
    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };


    var employees_2 = [
        {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 57000},
        {name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 53000},
        {name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 68000},
        {name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000}
    ];
    $scope.employees_2 = employees_2;
    $scope.rowLimit = 3;


    var employees_3 = [
        {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 57000},
        {name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 53000},
        {name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 68000},
        {name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000}
    ];
    $scope.employees_3 = employees_3;
    $scope.sortColumn = "name";


    var employees_4 = [
        {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 57000},
        {name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 53000},
        {name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 68000},
        {name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000}
    ];
    $scope.employees_4 = employees_4;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    };


    var employees_5 = [//ось це модель, яка має в собі масив
        {name: "Ben", gender: "Male", salary: 55000.788, city: "London"},
        {name: "Sara", gender: "Female", salary: 57000, city: "Chennai"},
        {name: "Mark", gender: "Male", salary: 53000, city: "London"},
        {name: "Pam", gender: "Female", salary: 68000, city: "Chennai"},
        {name: "Todd", gender: "Male", salary: 60000, city: "London"}
    ];
    $scope.employees_5 = employees_5;


    var employees_6 = [
        {name: "Ben", gender: "Male", salary: 55000.788, city_1: "London"},
        {name: "Sara", gender: "Female", salary: 57000, city_1: "Chennai"},
        {name: "Mark", gender: "Male", salary: 53000, city_1: "London"},
        {name: "Pam", gender: "Female", salary: 68000, city_1: "Chennai"},
        {name: "Todd", gender: "Male", salary: 60000, city_1: "London"}
    ];
    $scope.employees_6 = employees_6;


    $scope.todos = [
        {text: 'Learn AngularJS', done: false},
        {text: 'Build an app', done: false}
    ];
    $scope.getTotalTodos = function () {

        return $scope.todos.length;
    };
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };
    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = '';
    };


    $scope.money1 = '1.22$';
    $scope.money2 = '$2.31';
    $scope.money3 = '4.79';
});
app.filter('moneyFilter', function () {
    return function (str) {
        var lastChar = str.slice(-1),
            firstChar = str.slice(0, 1),
            slicedPart;
        if (lastChar === '$') {
            slicedPart = str.slice(0, str.length - 1);
            return "$" + slicedPart;
        } else if (firstChar === '$') {
            return str;
        } else {
            return '$' + str;
        }
    };
});



