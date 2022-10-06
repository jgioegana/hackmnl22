gsap.to("#sec-1-chat",{yPercent: -10, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1});
gsap.to("#sec-1-bulb",{yPercent: -10, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1.5});
gsap.to("#sec-1-rocket",{yPercent: -15, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1});
gsap.fromTo("#cloud1",{yPercent: 20}, {yPercent: 0, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1.5});
gsap.fromTo("#cloud2",{yPercent: 0}, {yPercent: 20, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1});
gsap.fromTo("#cloud3",{yPercent: 20}, {yPercent: 0, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1.5});
gsap.fromTo("#cloud4",{yPercent: 0}, {yPercent: 20, yoyo: true, repeat: -1, ease: "power1.inOut", duration: 1});