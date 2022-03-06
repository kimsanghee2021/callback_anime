const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const btnOpen = document.querySelector('.btnOpen');
const aside = document.querySelector('aside');
const _top = aside.querySelector('.top');
const _right = aside.querySelector('.right');
const _bottom = aside.querySelector('.bottom');
const _left = aside.querySelector('.left');
const inner = aside.querySelector('.inner');
const close = inner.querySelector('span');
const speed = 500;

btnOpen.addEventListener('click', ()=>{
    main.classList.add('off');
    new Animate(_top,{
    prop: 'width',
    value: '100%',
    duration: speed,
    callback: () => {

      new Animate(_right, {
        prop: 'height',
        value: '100%',
        duration: speed,
        callback: () => {

          new Animate(_bottom, {
            prop: 'width',
            value: '100%',
            duration: speed,
            callback: () => {

              new Animate(_left, {
                prop: 'height',
                value: '100%',
                duration: speed,
                callback: () => {

                  new Animate(inner, {
                    prop: 'opacity',
                    value: 1,
                    duration: speed
                  })
                }
              })
            }
          })
        }
      })
    }
    })
});

close.addEventListener('click', () => {

    new Animate(inner, {
        prop: 'opacity',
        value: 0,
        duration: speed/2,
        callback: () =>{
            new Animate(_top, {prop: 'width', value: '0%', duration: speed/2});
            new Animate(_right, {prop: 'height', value: '0%', duration: speed/2});
            new Animate(_bottom, {prop: 'width', value: '0%', duration: speed/2});
            new Animate(_left, {prop: 'height', value: '0%', duration: speed/2,callback:()=>{
                main.classList.remove('off');
            }});
        }
    })
})