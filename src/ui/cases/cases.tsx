import '@/styles/index.cases.css'
import '@/styles/common.css'
import Link from "next/link";

export default function Cases() {
  return (
      <div className="page flex-col">
          <div className="cases_box1 flex-col">
              <div className="box_8 flex-row">
                  <div className="group_5 flex-col justify-between">
                      <div className="text-wrapper_2 flex-col">
                          <span className="text_4">分类1哈哈</span>
                      </div>
                      <div className="text-wrapper_3 flex-col">
                          <span className="text_5">分类2哈哈</span>
                      </div>
                      <div className="text-wrapper_41 flex-col">
                          <span className="text_6">分类3哈哈</span>
                      </div>
                      <div className="text-wrapper_5 flex-col">
                          <span className="text_7">分类4哈哈</span>
                      </div>
                      <div className="text-wrapper_6 flex-col">
                          <span className="text_8">分类5哈哈</span>
                      </div>
                  </div>
                  <div className="group_6 flex-col justify-between">

                      <Link href={"/cases/1"}>
                          <div className="group_7 flex-col"/>
                      </Link>
                      <div className="group_8 flex-col"/>
                  </div>
                  <div className="group_9 flex-col justify-between">
                      <div className="group_21 flex-col"/>
                      <div className="group_3 flex-col"/>
                  </div>
              </div>
              <div className="box_9 flex-row justify-between">
                  <div className="box_10 flex-col"/>
                  <div className="box_71 flex-col"/>
              </div>
          </div>
      </div>
  );
}

