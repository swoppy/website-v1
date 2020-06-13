import { reaction } from 'mobx';
import { GlobalThemeStore, Theme } from '../../ui/themes';
import { BooleanStore } from '../../ui/generic_store';

export class HomeStore {
  readonly theme: BooleanStore;

  constructor(theme: boolean) {
    this.theme = new BooleanStore(theme);
    reaction(
      () => this.theme.value,
      () => {
        GlobalThemeStore.set(this.theme.value ? Theme.DARK : Theme.LIGHT);
        localStorage.setItem('swoppy-theme', GlobalThemeStore.get());
      },
    );
  }
}
