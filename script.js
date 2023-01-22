        let bar = document.getElementById('bar') 
        let nyawa = document.getElementById('nyawa') 
        let angka = document.getElementById('angka') 
        let a = document.getElementById('a')
        let b = document.getElementById('b')
        let c = document.getElementById('c')
        let e = document.getElementById('e')
        let d = document.getElementById('d')
        let gen = Math.floor(Math.random() * 20) + 1
        console.log(gen)
        function acak(){
            location.reload()
        }
        let sisanyawa = 5
        function tebak(){
            let input = document.getElementById('inputangka').value
            let hasil = document.getElementById('hasil')
            let tebak = document.getElementById('tebak')
            let reset = document.getElementById('reset')
           if(input == gen){
               angka.innerHTML = gen
               hasil.innerHTML = 'TEBAKAN ANDA BENAR'
               hasil.style.backgroundColor = 'rgb(55, 241, 55)'
               hasil.style.color = 'white'
                tebak.style.display = 'none'
                reset.style.display = 'block'
            }
            if(input < gen){
                
                hasil.innerHTML = 'COBA LEBIH TINGGI'
                hasil.style.backgroundColor = ' rgb(255, 255, 0)'
                hasil.style.color = 'grey'
                sisanyawa -= 1
                // nyawa.innerHTML = sisanyawa
            }
            if(input > gen){
                hasil.innerHTML = 'COBA LEBIH RENDAH'
                hasil.style.backgroundColor = 'rgb(255, 255, 0)'
                hasil.style.color = 'grey'
                sisanyawa -= 1
                // nyawa.innerHTML = sisanyawa
            }
            if(sisanyawa == 0){
                hasil.innerHTML = 'GAME OVER!!'
                hasil.style.backgroundColor = 'red'
                hasil.style.color = 'white'
                tebak.style.display = 'none'
                reset.style.display = 'block'
                // nyawa.innerHTML = sisanyawa
                a.style.display = 'none'
                b.style.display = 'none'
                c.style.display = 'none'
                d.style.display = 'none'
                e.style.display = 'none'
            }
            if(sisanyawa == 4){
                a.style.display = 'none'
            }
            if(sisanyawa == 3){
                a.style.display = 'none'
                b.style.display = 'none'
            }
            if(sisanyawa == 2){
                a.style.display = 'none'
                b.style.display = 'none'
                c.style.display = 'none'
            }
            if(sisanyawa == 1){
                a.style.display = 'none'
                b.style.display = 'none'
                c.style.display = 'none'
                d.style.display = 'none'
            }
        }
