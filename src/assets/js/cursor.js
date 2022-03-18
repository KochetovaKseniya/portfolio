if (screen.width  > 1064) {
  const element = document.getElementById("cursor");
  const target = document.querySelector(".target");
  const text = document.querySelector(".text");
  class Cursor {
    constructor(el, target, text) {
      this.el = el;
      this.bind();
    }
    bind() {
      document.addEventListener("mousemove", this.move.bind(this), false);
    }
    move(e) {
      const cursorPosition = {
        left: e.clientX,
        top: e.clientY
      };
      document.querySelectorAll(".target").forEach((single) => {
        let triggerDistance = single.getBoundingClientRect().width / 3;

        const targetPosition = {
          left:
            single.getBoundingClientRect().left +
            single.getBoundingClientRect().width / 2,
          top:
            single.getBoundingClientRect().top +
            single.getBoundingClientRect().height / 2
        };
        const distance = {
          x: targetPosition.left - cursorPosition.left,
          y: targetPosition.top - cursorPosition.top
        };

        const angle = Math.atan2(distance.x, distance.y);
        const hypotenuse = Math.sqrt(
          distance.x * distance.x + distance.y * distance.y
        );
        if (hypotenuse < triggerDistance) {
          TweenMax.to(this.el, 0.2, {
            left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
            top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
            height: single.clientHeight,
            width: single.clientWidth,
          });
          TweenMax.to(single.querySelector(".text"), 0.4, {
            x: -((Math.sin(angle) * hypotenuse) / 10),
            y: -((Math.cos(angle) * hypotenuse) / 10)
          });

        } else {
          TweenMax.to(this.el, 0.2, {
            left: cursorPosition.left,
            top: cursorPosition.top,
            height: "20px",
            width: "20px",
          });

          TweenMax.to(single.querySelector(".text"), 0.2, {
            x: 0,
            y: 0
          });
        }
      });
    }
  }
  const cursor = new Cursor(element, target);

  $('.cursorWhite').on('mouseenter', () => {
      $('#cursor').addClass('white');
  });
  $('.cursorWhite').on('mouseleave', () => {
      $('#cursor').removeClass('white');
  });
  
  $('#chat, .main__circle, .main__link, .main__bottom--git, .menu').on('mouseenter', () => {
      $('#cursor').addClass('hide');
      $('#cursor').addClass('white');
  });
  $('#chat, .main__circle, .main__link, .main__bottom--git, .menu').on('mouseleave', () => {
      $('#cursor').removeClass('hide');
  });




}