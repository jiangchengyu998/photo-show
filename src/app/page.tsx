import '@/styles/index.nav.css'
import '@/styles/common.nav.css'

export default function Home() {
  return (
      <div className="page flex-col">
        <div className="box_8 flex-col"/>
        <div className="box_9 flex-row">
          <div className="block_1 flex-col">
            <div className="block_2 flex-col"/>
            <div className="block_3 flex-col"/>
          </div>
          <div className="text-group_3 flex-col justify-between">
            <span className="text_8">营业时间</span>
            <span className="text_9">8:00-22:00</span>
          </div>
          <div className="block_4 flex-col">
            <div className="box_10 flex-col"/>
            <div className="box_11 flex-col"/>
          </div>
          <div className="text-group_4 flex-col justify-between">
            <span className="text_10">微信</span>
            <span className="text_11">Lim122188</span>
          </div>
          <div className="block_5 flex-col">
            <div className="group_8 flex-col"/>
            <div className="group_9 flex-col"/>
          </div>
          <div className="text-group_5 flex-col justify-between">
            <span className="text_12">服务热线</span>
            <span className="text_13">18829387465</span>
          </div>
          <div className="block_6 flex-col">
            <div className="group_10 flex-col"/>
            <div className="group_11 flex-col"/>
          </div>
          <div className="text-group_6 flex-col justify-between">
            <span className="text_14">&nbsp;小红书</span>
            <span className="text_15">黎啦啦啦</span>
          </div>
        </div>
        <div className="text-group_7 flex-col justify-between">
          <div className="text-wrapper_2">
            <span className="text_4">一言家庭摄影</span>
            <span className="text_5">&nbsp;</span>
            <span className="text_6">家庭的爱，镜头下的故事</span>
          </div>
          <span className="text_7">让照片讲述你们的故事，让回忆永远鲜活</span>
        </div>
        <div className="box_12 flex-row justify-between">
          <div className="image-wrapper_1 flex-col">
            <img
                className="image_1"
                src={"https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG61978e377198b93a2b7df03fb4ab4224.png"}
            />
          </div>
          <img
              className="image_2"
              src={"https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG03d07f11580c6438a03e626fedb51c43.png"}
          />
        </div>
        <div className="box_13 flex-row justify-between">
          <div className="box_2 flex-col"/>
          <div className="box_3 flex-col"/>
          <div className="box_4 flex-col"/>
          <div className="box_5 flex-col"/>
        </div>
      </div>
  );
}
