 //Viết một ứng dụng hỏi người dùng mày có yêu tao không 
        //lặp đi lặp lại quá trình khi người dùng trả lời "yes"
        //lặp đi lặp lại quá trình khi người dùng trả lời "no"

        while(true) {
            let answer = prompt("Mời bạn nhập : 'Bạn có yêu tôi không:'");
            if (answer === 'có') {
                console.log('Chúc mừng bạn đã yêu tao');
                break;
            } else if (answer === 'không') {
                console.log('Chúc mừng bạn đã không yêu tao');
                break;
            } else {
                console.log('Mời bạn nhập lại');
            }
        }