document.addEventListener("DOMContentLoaded", function () {
    var html = document.documentElement;
    var themeToggle = document.getElementById("theme-toggle");
    var form = document.getElementById("travel-form");
    var recommendations = document.getElementById("recommendations");
    var resultSummary = document.getElementById("result-summary");

    var destinations = [
        {
            city: "Lisbon",
            country: "Portugal",
            vibe: ["city", "food", "culture"],
            budget: "medium",
            seasons: ["spring", "summer", "autumn"],
            duration: ["short", "week"],
            bestFor: ["트램 골목 산책", "해산물", "노을"],
            highlight: "언덕 도시 특유의 리듬과 감각적인 카페, 대서양의 여유를 한 번에 즐기기 좋습니다."
        },
        {
            city: "Kyoto",
            country: "Japan",
            vibe: ["culture", "food", "nature"],
            budget: "high",
            seasons: ["spring", "autumn", "winter"],
            duration: ["week"],
            bestFor: ["사찰", "정원", "가이세키"],
            highlight: "정제된 전통미와 계절감이 강한 도시라 느린 일정으로 깊게 머물수록 만족도가 높습니다."
        },
        {
            city: "Cape Town",
            country: "South Africa",
            vibe: ["adventure", "nature", "food"],
            budget: "medium",
            seasons: ["summer", "autumn"],
            duration: ["week", "long"],
            bestFor: ["와이너리", "하이킹", "해안 드라이브"],
            highlight: "산과 바다, 와인 산지와 도시 감성이 밀도 높게 붙어 있어 액티브한 여행자에게 강합니다."
        },
        {
            city: "Reykjavik",
            country: "Iceland",
            vibe: ["nature", "adventure"],
            budget: "luxury",
            seasons: ["winter", "summer"],
            duration: ["week", "long"],
            bestFor: ["오로라", "빙하", "온천"],
            highlight: "짧은 도시 체류보다 로드트립과 자연 현상을 중심으로 설계할 때 가장 큰 가치를 줍니다."
        },
        {
            city: "Barcelona",
            country: "Spain",
            vibe: ["city", "beach", "food"],
            budget: "medium",
            seasons: ["spring", "summer", "autumn"],
            duration: ["short", "week"],
            bestFor: ["건축", "타파스", "지중해"],
            highlight: "도시 에너지와 해변 휴양을 한 일정에 묶기 좋아 첫 유럽 여행지로도 안정적입니다."
        },
        {
            city: "Queenstown",
            country: "New Zealand",
            vibe: ["adventure", "nature"],
            budget: "high",
            seasons: ["summer", "winter"],
            duration: ["week", "long"],
            bestFor: ["번지점프", "트레킹", "호수 풍경"],
            highlight: "극적인 풍경 안에서 액티비티 비중을 높이고 싶은 일정에 잘 맞습니다."
        },
        {
            city: "Marrakech",
            country: "Morocco",
            vibe: ["culture", "food", "city"],
            budget: "medium",
            seasons: ["spring", "autumn", "winter"],
            duration: ["short", "week"],
            bestFor: ["리야드", "시장", "향신료 요리"],
            highlight: "감각적인 숙소 경험과 강한 로컬 무드를 짧은 일정 안에 압축하기 좋습니다."
        },
        {
            city: "Bali",
            country: "Indonesia",
            vibe: ["beach", "nature", "food"],
            budget: "low",
            seasons: ["summer", "autumn", "winter"],
            duration: ["week", "long"],
            bestFor: ["리조트", "요가", "비치클럽"],
            highlight: "휴양 중심이지만 스파, 서핑, 우붓의 자연까지 붙일 수 있어 밸런스가 좋습니다."
        },
        {
            city: "Vancouver",
            country: "Canada",
            vibe: ["city", "nature", "adventure"],
            budget: "high",
            seasons: ["summer", "autumn"],
            duration: ["short", "week"],
            bestFor: ["도심+아웃도어", "브런치", "자전거"],
            highlight: "도시 생활감과 자연 접근성이 동시에 필요할 때 가장 효율적인 선택지 중 하나입니다."
        },
        {
            city: "Budapest",
            country: "Hungary",
            vibe: ["culture", "city", "food"],
            budget: "low",
            seasons: ["spring", "autumn", "winter"],
            duration: ["short", "week"],
            bestFor: ["온천", "야경", "유럽 감성"],
            highlight: "가성비 좋게 유럽의 건축미와 미식, 야간 풍경을 누리고 싶을 때 강합니다."
        },
        {
            city: "Banff",
            country: "Canada",
            vibe: ["nature", "adventure"],
            budget: "high",
            seasons: ["summer", "winter"],
            duration: ["week"],
            bestFor: ["국립공원", "호수", "설산"],
            highlight: "풍경 밀도가 높아 사진과 하이킹, 드라이브 중심 일정에 잘 맞습니다."
        },
        {
            city: "Seoul",
            country: "South Korea",
            vibe: ["city", "food", "culture"],
            budget: "medium",
            seasons: ["spring", "autumn", "winter"],
            duration: ["short", "week"],
            bestFor: ["야시장", "디자인", "카페"],
            highlight: "빠른 도시 템포와 깊은 미식 레이어, 근교 이동 편의성이 장점입니다."
        },
        {
            city: "Santorini",
            country: "Greece",
            vibe: ["beach", "nature"],
            budget: "luxury",
            seasons: ["spring", "summer", "autumn"],
            duration: ["short", "week"],
            bestFor: ["선셋", "허니문", "절벽 뷰"],
            highlight: "숙소 경험과 전망 중심의 프리미엄 여행에서 만족도가 높습니다."
        },
        {
            city: "Mexico City",
            country: "Mexico",
            vibe: ["city", "food", "culture"],
            budget: "low",
            seasons: ["spring", "autumn", "winter"],
            duration: ["short", "week"],
            bestFor: ["타코", "박물관", "크리에이티브 신"],
            highlight: "짙은 문화층과 현대적 감각이 공존해 미식·예술 중심 여행에 탁월합니다."
        },
        {
            city: "Patagonia",
            country: "Chile & Argentina",
            vibe: ["nature", "adventure"],
            budget: "luxury",
            seasons: ["summer"],
            duration: ["long"],
            bestFor: ["대자연", "트레킹", "빙하"],
            highlight: "장거리 일정과 높은 예산을 감수할수록 보상이 커지는 목적지입니다."
        },
        {
            city: "Dubrovnik",
            country: "Croatia",
            vibe: ["beach", "culture", "city"],
            budget: "high",
            seasons: ["summer", "autumn"],
            duration: ["short", "week"],
            bestFor: ["성벽", "아드리아해", "보트 투어"],
            highlight: "역사 도시 풍경과 바다를 묶어 보고 싶은 여행자에게 안정적인 선택입니다."
        }
    ];

    var labels = {
        vibe: {
            any: "취향 무관",
            city: "도시 탐험",
            nature: "자연과 풍경",
            beach: "해변 휴양",
            culture: "문화와 역사",
            food: "미식 여행",
            adventure: "액티비티"
        },
        budget: {
            any: "예산 무관",
            low: "가볍게",
            medium: "적당히",
            high: "프리미엄",
            luxury: "럭셔리"
        },
        season: {
            any: "계절 무관",
            spring: "봄",
            summer: "여름",
            autumn: "가을",
            winter: "겨울"
        },
        duration: {
            any: "기간 무관",
            short: "3~4일",
            week: "5~8일",
            long: "9일 이상"
        }
    };

    var savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "Light mode" : "Dark mode";

    themeToggle.addEventListener("click", function () {
        var nextTheme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
        html.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        themeToggle.textContent = nextTheme === "dark" ? "Light mode" : "Dark mode";
    });

    function scoreDestination(destination, filters) {
        var score = 0;

        if (filters.vibe !== "any" && destination.vibe.indexOf(filters.vibe) !== -1) {
            score += 3;
        }
        if (filters.budget !== "any" && destination.budget === filters.budget) {
            score += 2;
        }
        if (filters.season !== "any" && destination.seasons.indexOf(filters.season) !== -1) {
            score += 2;
        }
        if (filters.duration !== "any" && destination.duration.indexOf(filters.duration) !== -1) {
            score += 2;
        }

        return score;
    }

    function joinDuration(durationKeys) {
        return durationKeys.map(function (item) {
            return labels.duration[item];
        }).join(" · ");
    }

    function appendTagList(container, items) {
        items.forEach(function (item) {
            var tag = document.createElement("span");
            tag.textContent = item;
            container.appendChild(tag);
        });
    }

    function createMetaPill(text) {
        var pill = document.createElement("span");
        pill.textContent = text;
        return pill;
    }

    function createCard(destination, index) {
        var card = document.createElement("article");
        var rank = document.createElement("span");
        var title = document.createElement("h3");
        var location = document.createElement("p");
        var description = document.createElement("p");
        var meta = document.createElement("div");
        var tags = document.createElement("div");

        card.className = "recommendation-card";
        card.style.animationDelay = String(index * 120) + "ms";

        rank.className = "card-rank";
        rank.textContent = "Pick " + String(index + 1);

        title.textContent = destination.city;

        location.className = "location";
        location.textContent = destination.country;

        description.className = "description";
        description.textContent = destination.highlight;

        meta.className = "meta";
        meta.appendChild(createMetaPill(labels.budget[destination.budget]));
        meta.appendChild(createMetaPill(joinDuration(destination.duration)));

        tags.className = "tags";
        appendTagList(tags, destination.bestFor);

        card.appendChild(rank);
        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(description);
        card.appendChild(meta);
        card.appendChild(tags);

        return card;
    }

    function renderRecommendations(filters) {
        var ranked = destinations
            .map(function (destination) {
                destination.score = scoreDestination(destination, filters);
                return destination;
            })
            .sort(function (a, b) {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return a.city.localeCompare(b.city);
            })
            .slice(0, 3);

        recommendations.innerHTML = "";
        ranked.forEach(function (destination, index) {
            recommendations.appendChild(createCard(destination, index));
        });

        resultSummary.textContent = labels.vibe[filters.vibe] + ", " + labels.budget[filters.budget] + ", " + labels.season[filters.season] + ", " + labels.duration[filters.duration] + " 기준으로 지금 어울리는 추천입니다.";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        renderRecommendations({
            vibe: document.getElementById("vibe-select").value,
            budget: document.getElementById("budget-select").value,
            season: document.getElementById("season-select").value,
            duration: document.getElementById("duration-select").value
        });
    });

    renderRecommendations({
        vibe: "any",
        budget: "any",
        season: "any",
        duration: "any"
    });
});
