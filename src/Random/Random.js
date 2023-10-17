import React, { Component } from 'react';
import Sidenav from '../navigation/Sidenav'
import './Random.css'; // Random.css 파일로 수정

class Random extends Component {
    state = {
        foodData: {},
        isStopped: false,
    };

    // 하드코딩된 랜덤 음식 데이터
     hardcodedFoodData= [
        {
            name: '피자',
            image: 'https://handpizza.co.kr/img/page/menu/02/mb_sl3.png',
        },
        {
            name: '스테이크',
            image: 'https://post-phinf.pstatic.net/MjAxODAzMjFfMTI5/MDAxNTIxNjIxNTE0MjU4.K6A7tUiwden3UQMwelM35_4GIFB-NlhoPPIVD6IWokEg.KiHRHoreNOKSDQtEsW2de4ikvCRXlemsHah2xEjUGjQg.PNG/CA180320A_01.png?type=w1200',
        },
        {
            name: '파스타',
            image: 'https://recipe1.ezmember.co.kr/cache/recipe/2022/09/30/8e7eb8e3019532a8dc6d39a9a325aad41.jpg',
        },
        {
            name: '타코야끼',
            image: 'https://static.wixstatic.com/media/93db3f_aecba2b7832e4c05b4becfa08e52377e~mv2.png/v1/fill/w_962,h_544,al_c,q_90,usm_0.33_1.00_0.00,enc_auto/1_%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90%ED%83%80%EC%BD%94%EC%95%BC%EB%81%BC(%EB%94%B4%EA%B2%83).png',
        },
        {
            name: '초밥',
            image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956',
        },
        {
            name: '삼겹살',
            image: 'https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp',
        },
        {
            name: '갈비탕',
            image: 'https://static.wtable.co.kr/image/production/service/recipe/776/5446a21d-56e9-4725-b43a-50ca938566fd.jpg',
        },
        {
            name: '짜장면',
            image: 'https://i.namu.wiki/i/zLCSMHVvvt9_ZJyb33kImeEfmrBewsgNll9AyPyVcyNNX2frg1svs7I-nrm-seExLN7BcJ__RJMJCGKDIUkgPg.webp',
        },
        {
            name: '떡볶이',
            image: 'https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp',
        },
        {
            name: '치킨',
            image: 'https://www.bhc.co.kr/upload/bhc/menu/%ED%95%AB%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%BD%A4%EB%B3%B4_410x271.png',
        },
        {
            name: '라면',
            image: 'https://i.namu.wiki/i/8s7OaNPsZ8KC1e8RQ6QZEwgfFUoIVVOIm0jA72-UO6Imw0OgI1aEK_DulMeXWbg4tstts3IQFMJS0jmYKD9rzQ.webp',
        },
        {
            name: '핫도그',
            image: 'https://static.wtable.co.kr/image/production/service/recipe/1793/78e41de9-7045-41e0-8a44-6cbbcd65ddd5.jpg?size=800x800',
        },


        /* 추가 음식 데이터를 원하는 만큼 계속 추가할 수 있습니다. */
    ];

    componentDidMount() {
        // 페이지가 열리면 주기적으로 랜덤 음식을 변경합니다.
        this.startRandomFoodChange();
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트될 때 인터벌을 클리어합니다.
        clearInterval(this.randomFoodInterval);
    }

    startRandomFoodChange = () => {
        this.randomFoodInterval = setInterval(this.fetchRandomFood, 3); // 3초마다 음식 변경 (단위: 밀리초)
    };

    fetchRandomFood = () => {
        if (!this.state.isStopped) {
            const randomIndex = Math.floor(Math.random() * this.hardcodedFoodData.length);
            const randomFood = this.hardcodedFoodData[randomIndex];

            this.setState({
                foodData: randomFood,
            });
        }
    };

    handleImageClick = () => {
        // 이미지 클릭 시 이미지 변경을 멈춥니다.
        this.setState((prevState) => ({
            isStopped: !prevState.isStopped,
        }));

        if (!this.state.isStopped) {
            this.startRandomFoodChange();
        }
    };

    handleScreenClick = () => {
        if (!this.state.isStopped) {
            this.setState({
                isStopped: true,
            });
        }
    };

    render() {
        const { foodData, isStopped } = this.state;

        const imageStyle = {
            width: '500px', // 이미지 너비 조정
            height: 'auto', // 이미지 높이 자동 조정
            display: 'block', // 가운데 정렬을 위해 블록 요소로 설정
            margin: '0 auto', // 수평 가운데 정렬
        };

        return (
            <div className="Random" onClick={this.handleScreenClick}>
               <Sidenav/>
                <h1>랜덤 메뉴 추천</h1>
                <p>이미지를 클릭하여 멈추세요.</p>
                <div>
                    <img
                        src={foodData.image}
                        alt={foodData.name}
                        style={imageStyle}
                        onClick={this.handleImageClick} // 이미지 클릭 시 handleImageClick 호출
                    />
                    <h2>{foodData.name}</h2>
                </div>
            </div>
        );
    }
}

export default Random;