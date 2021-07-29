import "emoji-mart/css/emoji-mart.css";

//@ts-ignore
import { Picker } from "emoji-mart";
function filterEmoj(emoji: any) {
  console.log(emoji);
  return true;
}

const component: React.FC<{}> = () => {
  return (
    <Picker
      emojisToShowFilter={filterEmoj}
      onSelect={(e: any) => console.log(e)}
      set="twitter"
    />
  );
};
export default component;

{
  /* <Picker onSelect={this.addEmoji} />
<Picker title='Pick your emoji…' emoji='point_up' />
<Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
<Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} /> */
}
