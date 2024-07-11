describe('Test home page', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('div', '学习');

    cy.get('.max-w-\\[1200px\\] > .flex > .router-link-active').contains('产品');
    // 测试swiper图片
    cy.get('.swiper-wrapper').first().children().should('have.length', 3);

    // cypress不能测试多个tab标签业
    // 测试跳转
    cy.get(
      ':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://github.com/power-mooc/pk-front-vue3/issues"]'
    ).contains('社区');

    cy.get(
      ':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://github.com/power-mooc/pk-front-vue3/issues"]'
    ).should('have.attr', 'target', '_blank');

    cy.get(
      ':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://github.com/power-mooc/pk-front-vue3/issues"]'
    ).should('have.attr', 'href', 'https://github.com/power-mooc/pk-front-vue3/issues');

    cy.get('.max-w-\\[1200px\\] > .flex > [href="/study/list"]').click();

    cy.contains('登录');
    cy.contains('注册');
    cy.contains('每日一课');

    cy.get('.tabs > li:nth-child(3)').click({ force: true });
    cy.get('.tabs > li:nth-child(3)').should('have.class', 'active');
  });
  it('购买车icon check', () => {
    cy.visit('/study/cart');

    cy.contains('购物车');

    cy.get('.i-carbon\\:checkbox').click();
    cy.get('.bottom-0 .i-radix-icons\\:checkbox').should('have.length', 1);
  });
});
