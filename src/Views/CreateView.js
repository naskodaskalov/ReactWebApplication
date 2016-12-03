import React, { Component } from 'react';


// TODO : make css for this file and update

export default class CreateView extends Component {
    render() {
        return(
            <div id="create-view">
                    <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                        <h1>Добавете своята обява</h1>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Заглавие:</label>
                            <div className="col-md-4">
                            <input
                                type="text"
                                ref={e => this.titleField = e}
                                name="title"
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Автор:</label>
                            {/*TODO : convert userId to username*/}
                            <div className="col-md-4">
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                                disabled="disabled"
                                value={sessionStorage.getItem('userId')}
                                ref={e => this.authorField = e}
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
                                rows="4"
                                ref={e => this.descriptionField = e}
                            ></textarea>
                        </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Цена:</label>

                            <div className="input-group col-md-4">
                                <div className="input-group-addon">лв.</div>
                                <input
                                    type="text"
                                    className="form-control col-md-4"
                                    id="exampleInputAmount"
                                    placeholder="Въведете вашата цена"
                                    onChange={this.props.onChangeHandler}
                                    required="required"
                                    ref={e => this.priceField = e} />
                                    <div className="input-group-addon">.00</div>
                            </div>

                            {/*<div className="col-sm-10">*/}
                            {/*<input*/}
                                {/*type="number"*/}
                                {/*name="price"*/}
                                {/*className="form-control"*/}
                                {/*onChange={this.props.onChangeHandler}*/}
                                {/*required="required"*/}
                                {/*ref={e => this.priceField = e}*/}
                            {/*/>*/}
                        {/*</div>*/}
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Телефон за връзка:</label>
                            <div className="col-md-4">
                            <input
                                type="number"
                                name="price"
                                className="form-control col-md-4"
                                onChange={this.props.onChangeHandler}
                                required="required"
                                ref={e => this.phoneField = e}
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Снимка URL:</label>
                            <div className="col-md-4">
                            <input
                                type="number"
                                name="price"
                                className="form-control col-md-4"
                                onChange={this.props.onChangeHandler}
                                //required="required"
                                disabled="disabled"  // TODO: to be turned on...
                                ref={e => this.pictureField = e}
                            />
                            </div>
                        </div>
                        <input type="submit" className="btn btn-default" value="Добавете своята обява" />
                    </form>
            </div>
        )
    }
}
