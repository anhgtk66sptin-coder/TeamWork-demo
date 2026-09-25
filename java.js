document.addEventListener('DOMContentLoaded', () => {
  const teamMembers = [
    {
      name: 'Giàng Tuấn Anh',
      role: 'Driver',
      bio: 'Quê Quán: Mường Nhé - Điện Biên, Sở Thích:Học cái mới nghe nhạc, muốn hiểu biết sâu rộng nhiều lĩnh vực.',
      imgSrc: 'images/anhgt.jpg',
    },
    {
      name: 'Cầm Huy Tưởng',
      role: 'Cordinator',
      bio: 'Quê Quán: Phù Yên - Sơn La,Sở Thích: Đánh bóng,chơi game, muốn đi du lịch khắp mọi nơi.',
      imgSrc: 'images/tuongch.jpg',
    },
    {
      name: 'Tòng Thị Thanh Thúy',
      role: 'Navigator',
      bio: 'Quê Quán:Mường Luân - Điện Biên, Sở Thích:Ngủ,xem phim tổng tài muốn đến nơi có những khung cảnh đẹp. ',
      imgSrc: 'images/ttttt.jpg',
    },
    {
      name: 'Bùi Việt Hà',
      role: 'Tester',
      bio: 'Quê Quán:Cẩm Khê - Phú Thọ,Sở Thích: Ăn, Ngủ biến những ý tưởng phức tạp thành trải nghiệm đơn giản, thân thiện.',
      imgSrc: 'images/habv.jpg',
    },
  ];

  const container = document.querySelector('#team-container');

  teamMembers.forEach((member) => {
    const card = document.createElement('div');
    card.classList.add('team-card');
    card.innerHTML = `
          <div class="avatar-wrapper">
              <img src="${member.imgSrc}" alt="${member.name}" class="avatar-img">
          </div>
          <span class="role"></span>
          <h3 class="member-name"></h3>
          <p class="member-bio"></p>
      `;

    card.querySelector('.role').textContent = member.role;
    card.querySelector('.member-name').textContent = member.name;
    card.querySelector('.member-bio').textContent = member.bio;
    container.appendChild(card);
  });
});
