window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const air = parallax.querySelector('.parallax__air');
        const mounts = parallax.querySelector('.parallax__mounts');
        const person = document.querySelector('.parallax__person');

        const forAir = 8;
        const forMounts = 15;
        const forPerson = 70;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX + speed)
            positionY = positionY + (distY + speed)

            air.style.cssText = `transform: translate(${positionX / forAir}%,${positionY / forAir}%);`;
            mounts.style.cssText = `transform: translate(${positionX / forMounts}%,${positionY / forMounts}%);`;
            person.style.cssText = `transform: translate(${positionX / forPerson}%,${positionY / forPerson}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function(e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })
    }
}