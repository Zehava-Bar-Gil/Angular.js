function CustomersController () {
    this.sortBy= 'name';
    this.reverse= false;

    this.customers=[{joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25', name: 'Tina', city: 'New York', orderTotal: 100}, {joined: '1990-07-20', name: 'Dave', city: 'Seattle', orderTotal: 222},
    {joined: '1990-07-29', name: 'Zehava', city: 'Israel', orderTotal: 555}]    

    this.doSort=function(propName){
        this.sortBy= propName;
        this.reverse=!this.reverse;
    };
}