
for(i = 0; i<=200;i++){
    let texto = ''
    if(i % 3 == 0) texto += 'Fizz'
    if(i % 5 == 0) texto += 'Buzz'
    console.log(texto || i)
}