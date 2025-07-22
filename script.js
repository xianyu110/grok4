// DOM 内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 点击导航链接时关闭移动菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 数字动画
    function animateNumbers() {
        const counters = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    const increment = target / 100;
                    let count = 0;

                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            if (target >= 1000000) {
                                counter.textContent = (count / 1000000).toFixed(1) + 'M';
                            } else if (target >= 1000) {
                                counter.textContent = (count / 1000).toFixed(0) + 'K';
                            } else {
                                counter.textContent = Math.ceil(count);
                                if (target === 99) {
                                    counter.textContent = Math.ceil(count) + '%';
                                }
                                if (target === 24) {
                                    counter.textContent = Math.ceil(count);
                                }
                            }
                            requestAnimationFrame(updateCount);
                        } else {
                            if (target >= 1000000) {
                                counter.textContent = (target / 1000000).toFixed(0) + 'M';
                            } else if (target >= 1000) {
                                counter.textContent = (target / 1000).toFixed(0) + 'K';
                            } else {
                                counter.textContent = target;
                                if (target === 99) {
                                    counter.textContent = target + '%';
                                }
                            }
                        }
                    };
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.7 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // 导航栏滚动效果
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            });
        }
    }

    // 活跃导航链接高亮
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.6,
            rootMargin: '-20% 0px -20% 0px'
        });

        sections.forEach(section => {
            if (section.id) {
                observer.observe(section);
            }
        });
    }

    // 显示最后更新时间
    function displayLastUpdate() {
        const lastUpdateElement = document.getElementById('last-update');
        if (lastUpdateElement) {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Shanghai'
            };
            lastUpdateElement.textContent = now.toLocaleString('zh-CN', options);
        }
    }

    // 按钮点击事件
    function handleButtonClicks() {
        const primaryBtn = document.querySelector('.btn-primary');
        const secondaryBtn = document.querySelector('.btn-secondary');

        if (primaryBtn) {
            primaryBtn.addEventListener('click', () => {
                // 这里可以添加跳转到实际的 Grok AI 体验页面
                alert('感谢您的兴趣！Grok AI 体验功能即将上线。');
            });
        }

        if (secondaryBtn) {
            secondaryBtn.addEventListener('click', () => {
                // 滚动到关于区域
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    // 添加页面加载动画
    function addPageLoadAnimation() {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent && heroImage) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateX(-50px)';
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateX(50px)';
            
            // 延迟显示动画
            setTimeout(() => {
                heroContent.style.transition = 'all 0.8s ease';
                heroImage.style.transition = 'all 0.8s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateX(0)';
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateX(0)';
            }, 300);
        }
    }

    // 特色卡片悬浮效果
    function addFeatureCardEffects() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateY(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateY(0)';
            });
        });
    }

    // 添加粒子背景效果（简单版）
    function createParticleEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(102, 126, 234, 0.3);
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            hero.appendChild(particle);
        }

        // 添加粒子动画CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { 
                    transform: translateY(0px) translateX(0px);
                    opacity: 0;
                }
                50% { 
                    transform: translateY(-20px) translateX(10px);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 键盘导航支持
    function addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC 键关闭移动菜单
            if (e.key === 'Escape') {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }

    // 初始化所有功能
    function init() {
        animateNumbers();
        handleNavbarScroll();
        highlightActiveNavLink();
        displayLastUpdate();
        handleButtonClicks();
        addPageLoadAnimation();
        addFeatureCardEffects();
        createParticleEffect();
        addKeyboardNavigation();

        // 定期更新时间
        setInterval(displayLastUpdate, 60000); // 每分钟更新一次
    }

    // 启动初始化
    init();

    // 性能优化：防抖滚动事件
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            // 这里可以添加其他需要在滚动时执行的代码
        }, 16); // 约60fps
    });

    // 添加错误处理
    window.addEventListener('error', (e) => {
        console.warn('页面遇到了一个小问题，但不影响正常使用：', e.message);
    });

    // 页面可见性 API - 当页面重新获得焦点时更新时间
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            displayLastUpdate();
        }
    });

    console.log('🚀 Grok AI 页面已成功加载！');
}); 