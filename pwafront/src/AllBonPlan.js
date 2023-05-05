import React from 'react';
import "./AllBonPlan.scss"
import cart from './cart.png'
import { BsFillHandThumbsUpFill } from "react-icons/bs"
import axios from 'axios'
import { Navigate } from "react-router-dom";

export default class AllBonPlan extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { messages :[
            { name: "ce sont", cart: { cart } },
            { name: "des messages", cart: { cart } },
            { name: "de test", cart: { cart } },
            { name: "sans connexion", cart: { cart } },
            { name: "au", cart: { cart } },
            { name: "serveur", cart: { cart } },
        ], onclik : false}
    }
    
    async GetRecette() {
        axios.get('http://localhost:8080/AllBonPlan' , {header: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'}})
        .then(res => {
            let test = res.data.bonplan;
            test.click = true;
            test.click2 = true;
            console.log(test)
            this.setState({messages : test})
        }).catch((error) => {
        });
    }

    async LikeBonPlan(id) {
        axios.post('http://localhost:8080/likepost' , {
            "title" : "New notification",
            "bonplan" : id,
            "token" : localStorage.getItem("token")
        }, {header: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'}})
        .then(res => {
            let test = res.data.bonplan;
            test.click = true;
            test.click2 = true;
            console.log(test)
            this.setState({messages : test})
        }).catch((error) => {
        });
        this.GetRecette();
    }

    componentDidMount () {
        this.GetRecette();
    }

    render() {
        return (
            <div className="BonPlan">
            <div className='container-bonplan'>
                <h1>Les messages en tendance</h1>
            <div className='box-grid'>
                {this.state.messages.map((value, index) => {
                    return (
                        <div className="container-grid" key={index}>
                            <div className='container-text'>
                                <span className='hgt'>{value.name}</span>
                                <div className='reduc-box'>
                                    <div className='rb'>
                                    </div>
                                    <div className='rb'>
                                    </div>
                                </div>
                                <div className='Rate'>
                                    <div className='rate-number'>
                                        <div className='box-icon'>
                                        {(!value.likes) ? <span style={{margin : 10}}>{0}</span> : <span style={{margin : 10}}>{value.likes.split(";").length}</span>}
                                            <BsFillHandThumbsUpFill aria-disabled={false} onClick={() =>  {
                                                if (localStorage.getItem("token"))
                                                    this.LikeBonPlan(value.id)
                                                else {
                                                    console.log("jijdiejde")
                                                    this.setState({onclik : true})
                                                }
                                            }} className={value.click ? 'icon-plans_active'  : 'icons-plans' }/>
                                            {(this.state.onclik === true) && <Navigate to="/Connexion" replace={true} />}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
                )}
            </div>
            </div>
        </div>
        )
    }
}