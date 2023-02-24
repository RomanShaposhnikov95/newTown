(function () {
    let more = `Lasīt vairāk <svg width="10px" height="7px" viewBox="0 0 10 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>61B9F033-A2A1-4AC4-8092-C17020F56EC1</title>
                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Homepage" transform="translate(-316.000000, -2189.000000)" stroke="#60B358" stroke-width="1.7">
                        <g id="About-us" transform="translate(0.000000, 1856.000000)">
                            <g id="Link" transform="translate(215.000000, 326.000000)">
                                <g id="Icon" transform="translate(101.000000, 7.000000)">
                                    <polyline id="Path-3" points="1 1 5 5 9 1"></polyline>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>`;

    const textArea = document.querySelectorAll('[data-js=content]'),
        // maxText = 584;
        maxText = 537;


    [].forEach.call( textArea, function( el ) {
        let textAreaLength = el.innerHTML.trim().length,
            teaserText = el.innerHTML.substr(0, maxText),
            fullText = el.innerHTML,
            showTeaser = false;

        // Check to see if this text length is more
        // than the max
        if (textAreaLength >= maxText) {
            // Set flag
            showTeaser = true;

            // Set teaser text
            el.innerHTML = teaserText;

            // Create button

            let btnWrap =  document.createElement('span');
            btnWrap.classList.add('spanwrap');

            var button = document.createElement('button');
            button.innerHTML = more;
            button.classList.add('link');

            btnWrap.appendChild(button);
            el.appendChild(btnWrap);

            // Button click event
            button.onclick = function () {
                if (showTeaser === true) {
                    // Update flag
                    showTeaser = false;

                    // Update button text
                    this.innerHTML = 'Paslēpt';

                    // Show full text
                    el.innerHTML = fullText;

                    btnWrap.classList.remove('spanwrap');

                    // Re-append the button
                    el.appendChild(btnWrap);
                } else {
                    // Update flag
                    showTeaser = true;

                    // Update button text
                    this.innerHTML = more;

                    // Show teaser text
                    el.innerHTML = teaserText;

                    btnWrap.classList.add('spanwrap');

                    // Re-append the button
                    el.appendChild(btnWrap);
                }
                return false;
            };
        } else {
            // Show full text
            el.innerHTML = fullText;
        }

    });


})()
