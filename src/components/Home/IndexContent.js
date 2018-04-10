import React, { Component } from 'react'
import log from '../../utils/tool.js'
import doubleDigit from '../../utils/filter.js'
import './IndexContent.css'

class IndexContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexPlan: {}
        }
    }
    componentDidMount() {
        // const url = '/appInterfaceController/getShPlanList'
        // fetch(url).then(res => res.json()).then(
        //     (result) => {
        //         this.setState({
        //             indexPlan: result.data.voList[0] || {}
        //         })
        //     },
        //     (error) => {
        //         this.setState({
        //             // isLoaded: true,
        //             // error
        //         });
        //     }
        // )
    }
    render() {
        const indexPlan = this.state.indexPlan
        const status = indexPlan.insuranceStatus

        let planDetail = null
        if (status === -1) {
            planDetail = <DayPlan planDetail={indexPlan} />
        }
        if (status === 0) {
            planDetail = <DurationPlan planDetail={indexPlan} />
        }
        return (
            <div className="index-content" id="indexContent">
                <div className="index-prod-item" v-if="indexPlan.id">
                    <div id="content-top">
                        <div className="title">{indexPlan.title}</div>
                    </div>
                    <div className="title-line"></div>
                    <div className="gains">
                        <div className="table">
                            <div className="table-cell">
                                {planDetail}
                            </div>
                        </div>
                    </div>
                    <div id="content-bottom">
                        {/* <div @click="openFinanceDetail">
                            <span v-if="indexPlan.joinAmount > 0"  tapmode="activeBtn" class="btn" >预约加入</span>
                            <span v-else class="full btn">已满额</span>
                        </div> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default IndexContent

// 天标
function DayPlan(props) {
    const detail = props.planDetail
    const num = detail.interestRate.toFixed(2).toString()
    const interestRateBefore = num.substring(0, num.indexOf('.'))
    const interestRateAfter = num.substring(num.indexOf('.') + 1)

    return (
        <div>
            <h2 className="gains-num">
                <b>{interestRateBefore}</b>
                <span>.{interestRateAfter}%</span>
                {
                    detail.increaseInterestRate > 0 &&
                    <span className="gains-reward">+ {doubleDigit(detail.increaseInterestRate)}%</span>
                }

            </h2>
            <p>目标年化利率</p>
        </div>
    )
}

function DurationPlan(props) {
    const detail = props.planDetail
    const num = detail.interestRate.toFixed(2).toString()
    const interestRateBefore = num.substring(0, num.indexOf('.'))
    const interestRateAfter = num.substring(num.indexOf('.') + 1)

    return (
        <div>
            <div className="fl text-l">
                <h2 className="gains-num">
                    <b>{interestRateBefore}</b>
                    <span>.{interestRateAfter}%</span>
                    {
                        detail.increaseInterestRate > 0 &&
                        <span className="gains-reward">+ {doubleDigit(detail.increaseInterestRate)}%</span>
                    }
                </h2>
                <p>目标年化利率</p>
            </div>
            <div className="fr">
                <div className="gains-num">
                    {
                        detail.termUnit === 1 &&
                        <span>
                            <b>{detail.termCount}</b>
                            <i>个月</i>
                        </span>
                    }
                </div>
                <p>期限</p>
            </div>
        </div>
    );
}