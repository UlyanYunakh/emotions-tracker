import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface ScaleItem {
  colors: string[],
  emotions: string[],
  initialSelection?: number,
}

@Component({
  selector: 'app-emotion-selector',
  templateUrl: './emotion-selector.component.html',
  styleUrls: ['./emotion-selector.component.less']
})
export class EmotionSelectorComponent implements OnChanges {

  @Input()
  selection: number[] = [];

  emotionScalesArray: ScaleItem[] = [
    {
      colors: ['#FCF09A','#FEE28E','#FFD184','#FFC778','#FDB368','#F9A75D','#F99853','#FA8A48','#F67D38','#F37038'],
      emotions: ['Интерес', 'Ожидание', 'Настороженность'],
    },
    {
      colors: ['#F8F7BF','#F9F3A7','#F7F392','#F4F082','#F7EE6D','#FBEC51','#F8EB44','#F6EB2D','#F4EA28','#F7EA22'],
      emotions: ['Безмятежность', 'Радость', 'Восторг'],
    },
    {
      colors: ['#D7E3BD','#C4E1AB','#B5D894','#A4D383','#95CD72','#89C667','#7CC248','#72C052','#69BC54','#61B953'],
      emotions: ['Принятие', 'Доверие', 'Восхищение'],
    },
    {
      colors: ['#ABD37B','#A2CE75','#93C86C','#85C564','#73C257','#61BD50','#5BB053','#4AA651','#439A53','#318F50'],
      emotions: ['Тревога', 'Страх', 'Ужас'],
    },
    {
      colors: ['#B8DDE6','#AADEE9','#A0DAE6','#90D6E2','#8AD2DE','#7DCCDB','#6FCDD9','#67C8D8','#63C7D6','#57C5D4'],
      emotions: ['Растерянность', 'Удивление', 'Изумление'],
    },
    {
      colors: ['#A0BCE3','#95B2DC','#89A9D8','#7DA1D3','#7696CF','#678EC9','#5884C5','#4D7DBF','#4971B6','#3A6AB2'],
      emotions: ['Грусть', 'Печаль', 'Горе'],
    },
    {
      colors: ['#C5BEDD','#BFAFD4','#B7A5CF','#A995C6','#9F8AC2','#977EB8','#8B72B3','#8567AD','#8164A7','#7A5EA8'],
      emotions: ['Скука', 'Неудовольствие', 'Отвращение'],
    },
    {
      colors: ['#F7BDCC','#F9AFC8','#F59FC4','#F091BB','#F07FB3','#F075AE','#ED67A4','#ED579E','#EC4F9E','#EE4298'],
      emotions: ['Досада', 'Злость', 'Гнев'],
    },
    {
      colors: ['#D1C3BA','#C6BCB2','#C4B2A4','#BAA999','#B2A08A','#AD947E','#A78F77','#9D856B','#937C5D','#8B7052'],
      emotions: ['Смущение', 'Стыд', 'Вина'],
    }
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let { selection } = changes;

    if(selection.currentValue.length > 0) {
      this.emotionScalesArray.forEach((element, index) => {
        element.initialSelection = selection.currentValue[index];
      });
    }
  }

}
