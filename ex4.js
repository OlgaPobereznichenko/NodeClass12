var myName = 'Egor';

switch (myName) {
    case 'Pober':
        console.log('The name is Pober');
        break;
    case 'Olga':
        console.log('The name is Olga');
        break;

    case 'Oleg':
    case 'Egor':
        console.log('ComIT student');
        break   
    default:
        console.log('No value match found')
        break;
}