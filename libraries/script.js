gsap.to('#sec-1-chat',{yPercent: -10, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1});
gsap.to('#sec-1-bulb',{yPercent: -10, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1.5});
gsap.to('#sec-1-rocket',{yPercent: -15, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1});
gsap.fromTo('#cloud1',{yPercent: 20}, {yPercent: 0, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1.5});
gsap.fromTo('#cloud2',{yPercent: 0}, {yPercent: 20, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1});
gsap.fromTo('#cloud3',{yPercent: 20}, {yPercent: 0, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1.5});
gsap.fromTo('#cloud4',{yPercent: 0}, {yPercent: 20, yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 1});

function showCollapse(item){
    console.log(item);
    var faqAns = document.getElementById('sec-faq-ans-cont' + '_' + item).getBoundingClientRect();
    if(faqAns.height === 0) { //SHOW FAQ
        document.getElementById('faq-title' + '_' + item).classList.add('faq-btn-emphasis');
        gsap.to('#sec-faq-ans-cont' + '_' + item,{height: 'auto', duration: 0.5});
        document.getElementById('sec-faq-btn' + '_' + item).innerHTML = '—';
    }
    else { //HIDEFAQ
        document.getElementById('faq-title' + '_' + item).classList.remove('faq-btn-emphasis');
        gsap.to('#sec-faq-ans-cont' + '_' + item,{height:0, duration: 0.5});
        document.getElementById('sec-faq-btn' + '_' + item).innerHTML = '+';
    }
}