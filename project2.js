let data=[
    {
        name: 'Ayushi',
        age: '20'
    },
    {
        name: 'Bhaw',
        age: '20'
    },
    {
        name: 'jai',
        age: '23'
    }
];
const info=document.querySelector('#info');
let details = data.map(function(item){
    return '<div>'+ item.name+ ''+ 'is'+ item.age +'years old' +'</div>'
    
});
info.innerHTML = details.join('\n');