module.exports = {
    name: 'sarcastic',
    description: "converts message to sarcastic text",
    execute(message, args, client){
        
        

        
            const content = message.content;
            const split = content.split(/ +/);
            var args = split.slice(1);
            
        
            const letterArray = args.join(' ').split('');
            let counter = 0;
            const mockingText = letterArray.reduce((string, letter) => {
                string += counter % 2 ? letter.toUpperCase() : letter.toLowerCase();
                if(!letter.search(/[a-zA-z]/)){
                    counter++;
                }
                return string;
            }, '')
        
            
            message.edit(`${mockingText}`);
        }
        
  
  
        
    }
