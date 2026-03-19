document.addEventListener('DOMContentLoaded', () => {
    const travelForm = document.getElementById('travel-form');
    const recommendationsContainer = document.getElementById('recommendations');
    const resultSummary = document.getElementById('result-summary');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Theme Management
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });

    // Travel Data
    const destinations = [
        { name: "파리", country: "프랑스", vibe: "city", budget: "high", season: "spring", tags: ["로맨틱", "미식", "박물관"], desc: "에펠탑 아래에서 즐기는 피크닉과 세계적인 수준의 요리." },
        { name: "교토", country: "일본", vibe: "culture", budget: "medium", season: "autumn", tags: ["사찰", "전통", "단풍"], desc: "고즈넉한 사찰과 붉게 물든 단풍 속에서 즐기는 차 한 잔." },
        { name: "발리", country: "인도네시아", vibe: "beach", budget: "medium", season: "summer", tags: ["서핑", "요가", "휴양"], desc: "에메랄드빛 바다와 울창한 정글 사이에서 만나는 진정한 휴식." },
        { name: "아이슬란드", country: "아이슬란드", vibe: "nature", budget: "high", season: "winter", tags: ["오로라", "온천", "빙하"], desc: "대자연의 경이로움, 오로라와 온천이 어우러진 신비로운 겨울 여행." },
        { name: "방콕", country: "태국", vibe: "food", budget: "low", season: "winter", tags: ["스트리트푸드", "쇼핑", "활기"], desc: "화려한 야시장과 끝없이 펼쳐지는 미식의 향연." },
        { name: "스위스 알프스", country: "스위스", vibe: "adventure", budget: "luxury", season: "winter", tags: ["스키", "경관", "기차여행"], desc: "설산 위에서 즐기는 최고의 겨울 스포츠와 그림 같은 풍경." },
        { name: "치앙마이", country: "태국", vibe: "nature", budget: "low", season: "winter", tags: ["한달살기", "카페", "정글"], desc: "디지털 노마드의 성지, 평화로운 분위기 속에서 즐기는 로컬 감성." },
        { name: "피렌체", country: "이탈리아", vibe: "culture", budget: "high", season: "spring", tags: ["르네상스", "예술", "스테이크"], desc: "도시 전체가 거대한 박물관, 예술의 향기에 취하는 여행." },
        { name: "몰디브", country: "몰디브", vibe: "beach", budget: "luxury", season: "winter", tags: ["프라이빗", "허니문", "수상빌라"], desc: "세상과 단절된 완벽한 낙원, 끝없이 펼쳐진 에메랄드빛 수평선." },
        { name: "뉴욕", country: "미국", vibe: "city", budget: "luxury", season: "autumn", tags: ["브로드웨이", "공원", "쇼핑"], desc: "잠들지 않는 도시의 화려함과 센트럴 파크의 가을 정취." },
        { name: "프라하", country: "체코", vibe: "culture", budget: "medium", season: "autumn", tags: ["맥주", "야경", "중세"], desc: "붉은 지붕이 펼쳐진 동화 같은 풍경과 유럽 최고의 맥주." },
        { name: "인터라켄", country: "스위스", vibe: "adventure", budget: "high", season: "summer", tags: ["패러글라이딩", "하이킹", "호수"], desc: "알프스의 심장부에서 즐기는 짜릿한 액티비티와 투명한 호수." }
    ];

    const generateRecommendations = (e) => {
        if (e) e.preventDefault();
        
        const vibe = document.getElementById('vibe-select').value;
        const budget = document.getElementById('budget-select').value;
        const season = document.getElementById('season-select').value;

        let filtered = destinations.filter(dest => {
            return (vibe === 'any' || dest.vibe === vibe) &&
                   (budget === 'any' || dest.budget === budget) &&
                   (season === 'any' || dest.season === season);
        });

        // If no matches, show random or curated defaults
        if (filtered.length === 0) {
            filtered = destinations.sort(() => 0.5 - Math.random()).slice(0, 3);
            resultSummary.textContent = "완벽히 일치하는 곳이 없어, Atlas Finders가 엄선한 인기 여행지를 추천해 드립니다.";
        } else {
            filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
            resultSummary.textContent = `당신의 취향을 반영한 ${filtered.length}곳의 특별한 목적지를 찾았습니다.`;
        }

        renderCards(filtered);
    };

    const renderCards = (items) => {
        recommendationsContainer.innerHTML = '';
        items.forEach((item, index) => {
            const card = document.createElement('article');
            card.className = 'recommendation-card';
            card.style.animationDelay = `${index * 0.15}s`;
            
            card.innerHTML = `
                <span class="card-rank">Recommendation #${index + 1}</span>
                <h3>${item.name}</h3>
                <p class="location">${item.country}</p>
                <p class="description">${item.desc}</p>
                <div class="meta">
                    <span>${getLabel(item.vibe)}</span>
                    <span>${getLabel(item.budget)}</span>
                    <span>${getLabel(item.season)}</span>
                </div>
                <div class="tags">
                    ${item.tags.map(tag => `<span>#${tag}</span>`).join('')}
                </div>
            `;
            recommendationsContainer.appendChild(card);
        });
    };

    const getLabel = (value) => {
        const labels = {
            city: 'Metropolis', nature: 'Wilderness', beach: 'Coastal', culture: 'Heritage', food: 'Gourmet', adventure: 'Adventure',
            low: 'Budget', medium: 'Value', high: 'Premium', luxury: 'Luxury',
            spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter'
        };
        return labels[value] || value;
    };

    travelForm.addEventListener('submit', generateRecommendations);

    // Form Toggle Logic
    const reviewForm = document.getElementById('review-form');
    const formTypeRadios = document.querySelectorAll('input[name="form_type"]');
    const labelDestName = document.getElementById('label-dest-name');
    const inputDestName = document.getElementById('dest-name');
    const labelReviewText = document.getElementById('label-review-text');
    const textareaReviewText = document.getElementById('review-text');
    const submitBtn = document.getElementById('submit-btn');

    const updateFormUI = (type) => {
        if (type === 'recommend') {
            labelDestName.textContent = '추천하고 싶은 여행지';
            inputDestName.placeholder = '파리, 프랑스';
            labelReviewText.textContent = '추천 이유 및 팁';
            textareaReviewText.placeholder = '이 여행지만의 매력이나 팁을 공유해주세요.';
            submitBtn.textContent = '추천서 제출하기';
        } else {
            labelDestName.textContent = '리뷰할 여행지 (추천받은 곳)';
            inputDestName.placeholder = '예: 교토, 일본';
            labelReviewText.textContent = '다녀오신 후기';
            textareaReviewText.placeholder = '실제로 가보니 어떠셨나요? 솔직한 후기를 남겨주세요.';
            submitBtn.textContent = '리뷰 제출하기';
        }
    };

    formTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateFormUI(e.target.value);
        });
    });

    // Initial Load
    generateRecommendations();
});
