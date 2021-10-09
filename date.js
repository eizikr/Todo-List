// Create functions in module.exports

exports.getDate = function(){
    const todayDate = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return todayDate.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
    const todayDate = new Date();
        
    const options = {
        weekday: "long",
    };
    
    return todayDate.toLocaleDateString("en-US", options);
}
