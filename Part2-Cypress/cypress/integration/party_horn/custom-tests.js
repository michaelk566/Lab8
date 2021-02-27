describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75)
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33)
    })
  });

  it('Audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33)
    })
  });

  it('image and sound sources change when select party horn radio button ', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')
    })
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    })
  });

  it('Volume image changes from level 0 to level 1', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    })

    cy.get('#volume-slider').invoke('val', 1).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
  });

  it('Volume image changes from level 1 to level 2', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })

    cy.get('#volume-slider').invoke('val', 34).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
  });

  it('Volume image changes from level 2 to level 3', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')

      cy.get('#volume-slider').invoke('val', 67).trigger('input')
      cy.get('#volume-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
      })

    })
  });

  it('Honk button disabled when textbox input is empty', () => {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');

    });
  });

  it('Honk button disabled when textbox input is non-number', () => {
    cy.get('#volume-number').clear().type('string')
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');

    });
  });

  it('Error shown when input is out of range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').then($el =>{
      expect($el).to.exist;
    })

    cy.get('#volume-number').clear().type('-1');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').then($el =>{
      expect($el).to.exist;
    })
  });

});


