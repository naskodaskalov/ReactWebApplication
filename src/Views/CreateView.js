import React, { Component } from 'react';

export default class CreateView extends Component {
    componentWillMount(){
        if(!sessionStorage.getItem("username"))  this.context.router.push('/');
    }
    
    render() {
        return(
            <div id="create-view">
                <form className="form-horizontal">
                    <h1>Добавете своята обява</h1>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Заглавие:</label>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Описание:</label>
                        <div className="col-md-4">
                            <textarea
                                name="body"
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                                required="required"
                                rows="4">
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Цена:</label>

                        <div className="input-group col-md-4">
                            <div className="input-group-addon">лв.</div>
                            <input
                                type="number"
                                name="price"
                                className="form-control col-md-4"
                                id="exampleInputAmount"
                                placeholder="Въведете вашата цена"
                                onChange={this.props.onChangeHandler}
                                required="required" />
                            <div className="input-group-addon">.00</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Телефон за връзка:</label>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="phone"
                                className="form-control col-md-4"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Снимка URL:</label>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="picture"
                                className="form-control col-md-4"
                                onChange={this.props.onChangeHandler}
                            />
                        </div>
                    </div>

                    <input type="button"  className="btn btn-default" value="Добавете своята обява" onClick={this.props.onSubmitHandler} />
                </form>
            </div>
        )
    }
}


CreateView.contextTypes = {
    router: React.PropTypes.object
};