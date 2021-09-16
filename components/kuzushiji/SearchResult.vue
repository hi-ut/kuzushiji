<template>
  <div>
    <v-text-field
      class="my-10"
      v-model="search"
      append-icon="mdi-magnify"
      :label="$t('search')"
      single-line
      hide-details
      filled
      rounded
      dense
      background-color="grey lighten-2"
      clear-icon="mdi-close-circle"
      :clearable="true"
    ></v-text-field>

    <v-row>
      <v-col cols="12" md="3">
        <v-select
          dense
          single-line
          hide-details
          v-model="sort"
          :items="sortItems"
          outlined
          rounded
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          dense
          single-line
          hide-details
          v-model="radical"
          :items="radicalItems"
          outlined
          rounded
        ></v-select>
      </v-col>

      <v-col cols="12" md="9" class="text-right">
        <v-btn
          v-for="(option, key) in layouts"
          :key="key"
          icon
          @click="layout_ = option.value"
          ><v-icon :color="layout_ === option.value ? 'primary' : ''">{{
            option.icon
          }}</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <template v-if="layout_ === 'grid'">
      <List :items="items2" :sort="sort" :query="query" />
    </template>
    <template v-else>
      <Table :items="items2" :query="query" class="mt-5" />
    </template>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import List from '~/components/kuzushiji/List.vue'
import Table from '~/components/kuzushiji/Table.vue'

@Component({
  components: {
    List,
    Table,
  },
})
export default class ShareButtons extends Vue {
  baseUrl: any = process.env.BASE_URL

  @Prop({})
  query!: any

  search: string = ''

  @Prop({ required: true })
  items!: any[]

  layouts: any[] = [
    {
      icon: 'mdi-view-grid',
      value: 'grid',
    },
    {
      icon: 'mdi-table',
      value: 'table',
    },
  ]

  layout_: string = 'grid'

  radicalItems: any = ['全て','カタカナ','ひらがな','一','丨','丶','丿','乙','亅','二','亠','人','儿','入','八','冂','冖','冫','几','凵','刀','力','勹','匕','匚','匸','十','卜','卩','厂','厶','又','口','囗','土','士','夂','夊','夕','大','女','子','宀','寸','小','尢','尸','屮','山','巛','工','己','巾','干','幺','广','廴','廾','弋','弓','彐','彡','彳','心','戈','戶','手','支','攴','文','斗','斤','方','无','日','曰','月','木','欠','止','歹','殳','毋','比','毛','氏','气','水','火','爪','父','爻','爿','片','牙','牛','犬','玄','玉','瓜','瓦','甘','生','用','田','疋','疒','癶','白','皮','皿','目','矛','矢','石','示','禸','禾','穴','立','竹','米','糸','缶','网','羊','羽','老','而','耒','耳','聿','肉','臣','自','至','臼','舌','舛','舟','艮','色','艸','虍','虫','血','行','衣','襾','見','角','言','谷','豆','豕','豸','貝','赤','走','足','身','車','辛','辰','辵','邑','酉','釆','里','金','長','門','阜','隶','隹','雨','靑','非','面','革','韋','韭','音','頁','風','飛','食','首','香','馬','骨','高','髟','鬥','鬯','鬲','鬼','魚','鳥','鹵','鹿','麥','麻','黃','黍','黑','黹','黽','鼎','鼓','鼠','鼻','齊','齒','龍','龜','龠',]
  radical: string = '全て'

  sortItems: any = [
    {
      text: this.$t('出現回数'),
      value: 'size',
    },
    {
      text: this.$t('コード'),
      value: 'code',
    },
  ]

  sort: string = 'size'

  get items2() {
    const search = this.search
    const items = this.items

    const key = this.sort
    const key2 = this.radical

    if (key === 'size') {
      items.sort(function (a: any, b: any) {
        if (a.size < b.size) return 1
        if (a.size > b.size) return -1
        return 0
      })
    } else {
      items.sort(function (a: any, b: any) {
        if (a.sort < b.sort) return -1
        if (a.sort > b.sort) return 1
        return 0
      })
    }

    if (key2 != '全て') {
      this.search='' //クリア検索欄
      let filterdByRadical = []
      for (const item of items) {
        if (key2 === item.radical) {
          filterdByRadical.push(item)
        }
      }
      return filterdByRadical
    }

    if (!search) {
      return items
    }

    const items2 = []
    for (const item of items) {
      if (search === item.label) {
        items2.push(item)
        break
      }
    }

    return items2
  }
}
</script>
