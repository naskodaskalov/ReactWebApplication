import React, { Component } from 'react';

export default class EditView extends Component {

  
    render() {
        return(
            <div id="edit-view">
                    <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                        <h1>Редактирайте своята обява</h1>
                        
                        <div className="form-group">
                            <label className="col-md-4 control-label">Заглавие:</label>
                            <div className="col-md-4">
                            <input
                                type="text"
                                name="title"
                                value={this.props.title}
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Автор:</label>
                            <div className="col-md-4">
                            <input
                                type="text"
                                name="author"
                                value={this.props.author}
                                className="form-control"
                                onChange={this.props.onChangeHandler}
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Описание:</label>
                            <div className="col-md-4">
                            <textarea
                                name="body"
                                className="form-control"
                                value={this.props.body}
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
                                    type="text"
                                    name="price"
                                    value={this.props.price}
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
                                value={this.props.phone}
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
                                value={this.props.picture}
                                className="form-control col-md-4"
                                onChange={this.props.onChangeHandler}

                            />
                            </div>
                        </div>
                        <input type="submit" className="btn btn-default" value="Редактирайте своята обява" />
                    </form>
            </div>
        )
    }
}
