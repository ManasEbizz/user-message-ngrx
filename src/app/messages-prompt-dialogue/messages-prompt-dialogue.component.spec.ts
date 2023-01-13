import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPromptDialogueComponent } from './messages-prompt-dialogue.component';

describe('MessagesPromptDialogueComponent', () => {
  let component: MessagesPromptDialogueComponent;
  let fixture: ComponentFixture<MessagesPromptDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesPromptDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesPromptDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
